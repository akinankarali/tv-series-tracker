import Vuex from 'vuex'
import Vue from 'vue'
import Shows from '../api/Shows'

//load Vuex
Vue.use(Vuex)

//to handle state
const state = {
  shows: [],
  followList: []
}

//to handle state
const getters = {}

const mutations = {
  SET_SHOWS(state, data) {
    state.shows = data
  },
  SET_GENRES(state, data) {
    state.genres = data
  }
}

//to handle actions
const actions = {
  async fetchAllShows({ commit }) {
    Shows.all().then(response => {
      commit('SET_SHOWS', response.data)
      commit('SET_GENRES', response.data)
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
