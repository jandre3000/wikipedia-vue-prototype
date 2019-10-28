const state = {
  sidebarCollapsed: false,
  loggedIn: false
};

const mutations = {
  setSidebarCollapsed(state, status) {
    state.sidebarCollapsed = status;
  },
  setLoggedIn(state, status) {
    state.loggedIn = status;
  }
};

// Computed properties for stores.
const getters = {};

const actions = {
  toggleSidebar({ commit }) {
    commit("setSidebarCollapsed", !state.sidebarCollapsed);
  },
  toggleLoggedIn({ commit }) {
    commit("setLoggedIn", !state.loggedIn);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
