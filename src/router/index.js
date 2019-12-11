import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

const First = () => import('../views/First.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'First',
    component: First
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
