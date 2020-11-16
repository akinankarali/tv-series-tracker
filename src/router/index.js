import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/your-list',
    name: 'Your-List',
    component: () =>
        import(/* webpackChunkName: "list" */ '../views/list'),
  },
  {
    path: '/movie-info',
    name: 'Movie-info',
    component: () =>
        import(/* webpackChunkName: "list" */ '../views/movie'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
