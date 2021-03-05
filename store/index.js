export const state = () => {
  return {
    search: null,
  }
}
export const getters = {
  search(state) {
    return state.search
  },
}
export const mutations = {
  SET_SEARCH(state, payload) {
    state.search = payload
  },
}

export const actions = {
  setSearch({ commit }, payload) {
    commit('SET_SEARCH', payload)
  },
}
