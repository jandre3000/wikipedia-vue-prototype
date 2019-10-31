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
    state.sidebarCollapsed = !status;
  },
  setVectorMode(state, baseRoute) {
    state.classicMode = baseRoute === "/vector/" || baseRoute === "/p1/";
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
  setVectorMode({ state, commit }, baseRoute) {
    commit("setVectorMode", baseRoute);
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
