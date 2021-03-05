export const state = () => {
  return {
    filter: {},
  }
}
export const getters = {
  filter(state) {
    return state.filter
  },
  filterType(state) {
    return state.filter?.type?.value
  },
}
export const mutations = {
  SET_FILTER(state, { props, payload }) {
    state.filter = { ...state.filter, [props]: payload }
  },
}

export const actions = {
  setFilter({ commit }, { props, payload }) {
    commit('SET_FILTER', { props, payload })
  },
}
