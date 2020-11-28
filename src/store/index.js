import Vuex from 'vuex'
import Vue from 'vue'
import Shows from '../api/Shows'

//load Vuex
Vue.use(Vuex)

//to handle state
const state = {
  shows: [],
  followList: [],
  input: ''
}

//to handle state
const getters = {
  SHOW_LIST: state => {
    return state.shows
  },
  FOLLOW_LIST: state => {
    return state.followList
  },
  GET_INPUT: state => {
    return state.input
  }
}

const mutations = {
  SET_SHOWS(state, data) {
    state.shows = data
  },
  SET_INPUT(state, data) {
    state.input = data
  }
}

//to handle actions
const actions = {
  async fetchAllShows({ commit }) {
    Shows.all().then(response => {
      commit('SET_SHOWS', response.data)
    })
  }
}

//export store module
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
