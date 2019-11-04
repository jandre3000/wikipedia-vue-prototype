import axios from "axios";

const state = {
  tagline: "",
  language: "",
  logoUrl: "",
  titleParam: ""
};

const mutations = {
  setTitleParam(state, title) {
    state.titleParam = title;
  },
  setLanguage(state, lang) {
    state.language = lang;
  },
  setLogoUrl(state, logoUrl) {
    state.logoUrl = logoUrl;
  },
  setTagline(state, tagline) {
    state.tagline = tagline;
  }
};

// Computed properties for stores.
const getters = {};

const actions = {
  updateSite({ state, dispatch }, { lang, title }) {
    if (state.language !== lang) {
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
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
