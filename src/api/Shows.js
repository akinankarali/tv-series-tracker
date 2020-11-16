import Api from '../api/Api'

const END_POINT = 'shows'

export default {
  all() {
    return Api.get(END_POINT)
  },
  show() {
    return Api.get(`${END_POINT}/1`)
  },
  image() {
    return Api.get(`${END_POINT}/1/images`)
  },
  cast() {
    return Api.get(`${END_POINT}/1/cast`)
  },
  episode() {
    return Api.get(`${END_POINT}/1/episodes`)
  },
  season() {
    return Api.get(`${END_POINT}/1/seasons`)
  },
  crew() {
    return Api.get(`${END_POINT}/1/crew`)
  }
}
