import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/analytics',
    name: 'analytics',
    component: () => import('../views/Analytics.vue')
  },
  {
    path: '/:issue',
    name: 'issue',
    component: () => import('../views/Issue.vue')
  },
  {
    path: '/:issue/vote',
    name: 'issue-vote',
    component: () => import('../views/IssueVote.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
