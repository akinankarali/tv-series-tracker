import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'

//load Vuex
Vue.use(Vuex)

//to handle state
const state = {
  shows: [],
  genres: [],
  showInfo: [],
  showImages: [],
  showCast: [],
  showEpisodes: [],
  showSeasons: [],
  showCrew: []
}

//to handle state
const getters = {}

const mutations = {
  SET_SHOWS(state, data) {
    state.shows = data
  },
  SET_GENRES(state, data) {
    state.genres = data
  },
  SET_SHOW_INFO(state, data) {
    state.showInfo = data
  },
  SET_SHOW_IMAGES(state, data) {
    state.showImages = data
  },
  SET_SHOW_CAST(state, data) {
    state.showCast = data
  },
  SET_SHOW_EPISODES(state, data) {
    state.showEpisodes = data
  },
  SET_SHOW_SEASONS(state, data) {
    state.showSeasons = data
  },
  SET_SHOW_CREW(state, data) {
    state.showCrew = data
  }
}

//to handle actions
const actions = {
  async fetchAllShows({ commit }) {
    axios.get('http://api.tvmaze.com/shows').then(response => {
      commit('SET_SHOWS', response.data)
      commit('SET_GENRES', response.data)
    })
  },
  async fetchShow({ commit }) {
    axios.get('http://api.tvmaze.com/shows/1').then(response => {
      commit('SET_SHOW_INFO', response.data)
    })
  },
  async fetchShowImages({ commit }) {
    axios.get('http://api.tvmaze.com/shows/1/images').then(response => {
      commit('SET_SHOW_IMAGES', response.data)
    })
  },
  async fetchShowCast({ commit }) {
    axios.get('http://api.tvmaze.com/shows/1/cast').then(response => {
      commit('SET_SHOW_CAST', response.data)
    })
  },
  async fetchShowEpisodes({ commit }) {
    axios.get('http://api.tvmaze.com/shows/1/episodes').then(response => {
      commit('SET_SHOW_EPISODES', response.data)
    })
  },
  async fetchShowSeasons({ commit }) {
    axios.get('http://api.tvmaze.com/shows/1/seasons').then(response => {
      commit('SET_SHOW_SEASONS', response.data)
    })
  },
  async fetchShowCrew({ commit }) {
    axios.get('http://api.tvmaze.com/shows/1/crew').then(response => {
      commit('SET_SHOW_CREW', response.data)
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
