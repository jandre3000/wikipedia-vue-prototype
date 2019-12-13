const state = {
  sidebarCollapsed: true,
  loggedIn: false,
  classicMode: false
};

const mutations = {
  setSidebarCollapsed(state, status) {
    state.sidebarCollapsed = status && !state.classicMode;
  },
  setLoggedIn(state, status) {
    state.loggedIn = status;
    if (!state.classicMode) {
      state.sidebarCollapsed = !status;
    }
  },
  setVectorMode(state, appName) {
    state.classicMode = appName === "classic";
  }
};

// Computed properties for stores.
const getters = {};

const actions = {
  toggleSidebar({ state, commit }) {
    commit("setSidebarCollapsed", !state.sidebarCollapsed);
  },
  setLoggedIn({ commit }, loggedInState) {
    commit("setLoggedIn", loggedInState);
  },
  setVectorMode({ state, commit }, appName) {
    commit("setVectorMode", appName);
    commit("setSidebarCollapsed", state.sidebarCollapsed);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
