import articleApi from "@/core/wiki/api/article";
import historyApi from "@/core/wiki/api/history";

const state = {
  title: null,
  language: null,
  description: null,
  wikidataId: null,
  sections: [],
  toc: [],
  image: {},
  languagecount: 0,
  languageLinks: [],
  issues: [],
  indicators: {},
  revisions: [],
  history: {},
  metadata: {},
  media: {},
  geo: {},
  pronunciation: {},
  loadingStatus: "loading"
};

// The only way to actually change state in a Vuex store is by committing a mutation.
const mutations = {
  setLoadingStatus(state, status) {
    state.loadingStatus = status;
  },
  setTitle(state, title) {
    state.title = title;
  },
  setDescription(state, description) {
    state.description = description;
  },
  setImage(state, image) {
    state.image = image;
  },
  setIssues(state, issues) {
    state.issues = issues;
  },
  setIndicators(state, indicators) {
    state.indicators = indicators;
  },
  setLanguagecount(state, languagecount) {
    state.languagecount = languagecount;
  },
  setLanguageLinks(state, languageLinks) {
    state.languageLinks = languageLinks;
  },
  setWikidataId(state, id) {
    state.wikidataId = id;
  },
  setSections(state, sections) {
    state.sections = sections;
  },
  setTOC(state, toc) {
    state.toc = toc;
  },
  setHistory(state, history) {
    state.history = history;
  },
  setRevisions(state, revisions) {
    state.revisions = revisions;
  },
  setMetadata(state, metadata) {
    state.metadata = metadata;
  },
  setMedia(state, mediaInfo) {
    state.media = mediaInfo;
  },
  setGeo(state, geo) {
    state.geo = geo;
  },
  setPronunciation(state, pronunciation) {
    state.pronunciation = pronunciation;
  }
};

// Computed properties for stores.
const getters = {};

const actions = {
  fetch({ commit, dispatch }, articleRequest) {
    commit("setLoadingStatus", "loading");
    const articleNetworkRequest = articleApi
      .fetchArticle(
        articleRequest.language,
        articleRequest.title,
        articleRequest.api
      )
      .then(articleData => {
        commit("setLoadingStatus", "success");
        commit("setTitle", articleData.title);
        commit("setDescription", articleData.description);
        commit("setImage", articleData.image);
        commit("setIssues", articleData.issues);
        commit("setIndicators", articleData.indicators);
        commit("setWikidataId", articleData.wikidataId);
        commit("setHistory", articleData.history);
        commit("setSections", articleData.sections);
        // commit("setTOC", articleData.toc);
        commit("setGeo", articleData.geo);
        commit("setPronunciation", articleData.pronunciation);
      })
      .catch(() => {
        commit("setLoadingStatus", "failure");
      });
    articleApi
      .fetchTOC(articleRequest.language, articleRequest.title)
      .then(tocData => {
        /*const toc = [];
        tocData.forEach(element => {
          if (element.toclevel === 1) {
            toc.push({
              title: element.line,
              link: element.anchor
            });
          }
        });
        debugger;
        */
        commit("setTOC", tocData);
      });
    dispatch("metadata", articleRequest);
    dispatch("languageLinks", articleRequest);
    dispatch("media", articleRequest);
    dispatch("history", articleRequest);
    return articleNetworkRequest;
  },
  languageLinks({ commit }, articleRequest) {
    articleApi
      .fetchLangLinks(articleRequest.language, articleRequest.title)
      .then(response => {
        commit("setLanguageLinks", response);
      });
  },
  metadata({ commit }, articleRequest) {
    articleApi
      .fetchMetadata(articleRequest.language, articleRequest.title)
      .then(metadata => {
        commit("setMetadata", metadata);
      });
  },
  media({ commit }, articleRequest) {
    articleApi
      .fetchMedia(articleRequest.language, articleRequest.title)
      .then(mediaInfo => {
        commit("setMedia", mediaInfo);
      });
  },
  history({ commit, state }, articleRequest) {
    historyApi
      .fetchHistory(articleRequest.language, state.title)
      .then(revisions => {
        commit("setRevisions", revisions);
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
