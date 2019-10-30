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
  toggleLoggedIn({ commit }) {
    commit("setLoggedIn", !state.loggedIn);
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
