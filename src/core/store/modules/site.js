import axios from "axios";
import rtlLangs from "../../wiki/rtl-languages.json";

const state = {
  tagline: "",
  language: "",
  langDir: "",
  logoUrl: "",
  titleParam: "",
  i18n: {}
};

const mutations = {
  setTitleParam(state, title) {
    state.titleParam = title;
  },
  setLanguage(state, lang) {
    state.language = lang;
    state.langDir = rtlLangs.includes(lang) ? "rtl" : "ltr";
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", state.langDir);
  },
  setLogoUrl(state, logoUrl) {
    state.logoUrl = logoUrl;
  },
  setTagline(state, tagline) {
    state.tagline = tagline;
  },
  setI18n(state, i18nJson) {
    state.i18n = i18nJson;
  }
};

// Computed properties for stores.
const getters = {};

const actions = {
  updateSite({ state, dispatch }, { lang, title }) {
    if (state.language !== lang) {
      if (lang === "zh") {
        lang = "zh-hans";
      }
      dispatch("updateI18n", lang);
      dispatch("updateLanguage", lang);
      dispatch("updateLogoUrl", lang);
      dispatch("updateTagline", lang);
    }
    if (state.title !== title) {
      dispatch("updateTitleParam", title);
    }
  },
  updateTitleParam({ commit }, title) {
    commit("setTitleParam", title);
  },
  updateLanguage({ commit }, lang) {
    commit("setLanguage", lang);
  },
  updateTagline({ commit }, lang) {
    const baseUrl = `https://${lang}.wikipedia.org/w/api.php`;
    return axios
      .get(baseUrl, {
        params: {
          action: "parse",
          format: "json",
          page: "MediaWiki:Tagline",
          prop: "wikitext",
          utf8: 1,
          formatversion: "latest",
          redirects: "true",
          origin: "*"
        }
      })
      .then(response => {
        commit("setTagline", response.data.parse.wikitext);
      });
  },
  updateLogoUrl({ commit }, lang) {
    const localUrl = `https://en.wikipedia.org/static/images/project-logos/${lang}wiki-2x.png`;
    const fallbackUrl = `https://en.m.wikipedia.org/static/images/mobile/copyright/wikipedia-wordmark-en.svg`;
    const img = new Image();
    img.src = localUrl;
    img.onload = () => {
      commit("setLogoUrl", localUrl);
    };
    img.onerror = () => {
      commit("setLogoUrl", fallbackUrl);
    };
  },
  updateI18n({ commit }, lang) {
    function msg(string) {
      if (/Uls-/.test(string[0])) {
        return "Wikimedia:" + string[0] + "/" + lang;
      }
      return (
        "MediaWiki:" +
        string[0][0].toUpperCase() +
        string[0].slice(1) +
        "/" +
        lang
      );
    }

    const baseUrl = "https://translatewiki.net/w/api.php";
    const params = {
      action: "query",
      format: "json",
      prop: "revisions",
      titles: [
        //personal-navigation
        msg`notloggedin`,
        msg`talk`,
        msg`anoncontribs`, //contributions
        msg`createaccount`,
        msg`login`,
        //logged in
        msg`sandboxlink-portlet-label`,
        msg`preferences`,
        msg`betafeatures-toplink`,
        msg`watchlist`,
        msg`user-contributions`,
        msg`logout`,
        // left navigation
        msg`nstab-main`,
        // language selector
        msg`uls-plang-title-languages`,
        //right navigation
        msg`vector-view-view`, //read
        msg`vector-view-viewsource`,
        msg`vector-view-history`,
        msg`vector-more-actions`,
        msg`vector-action-move`,
        // search
        msg`search`,
        // sidebar
        msg`mainpage-description`,
        msg`currentevents`,
        msg`randompage`,
        msg`sitesupport`,
        msg`help`,
        msg`aboutsite`,
        msg`portal`,
        msg`recentchanges`,
        msg`contactpage`,
        msg`toolbox`,
        msg`whatlinkshere`,
        msg`recentchangeslinked-toolbox`,
        msg`upload`,
        msg`specialpages`,
        msg`permalink`,
        msg`pageinfo-toolboxlink`,
        msg`coll-print_export`,
        msg`coll-create_a_book`,
        msg`coll-download_as_pdf`,
        msg`coll-printable_version_pdf`,
        // ULS
        msg`Uls-uls-search-help`,
        msg`Uls-uls-region-WW`,
        msg`Uls-uls-region-EU`,
        msg`Uls-uls-region-ME`,
        msg`Uls-uls-region-AF`,
        msg`Uls-uls-region-AS`,
        msg`Uls-uls-region-PA`,
        msg`Uls-uls-region-all`
      ].join("|"),
      utf8: 1,
      formatversion: "latest",
      rvprop: "content",
      origin: "*"
    };
    return axios.get(baseUrl, { params: params }).then(response => {
      const pages = response.data.query.pages;
      const msgObj = pages.reduce((messageObj, page) => {
        var title = page.title
          .replace("MediaWiki:", "")
          .replace("Wikimedia:Uls-", "")
          .replace(`/${lang}`, "")
          .replace(/^\w/, c => c.toLowerCase());

        if (!page.missing) {
          messageObj[title] = page.revisions[0].content;
        }
        return messageObj;
      }, {});
      commit("setI18n", msgObj);
    });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
