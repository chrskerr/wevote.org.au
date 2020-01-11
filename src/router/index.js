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
    path: '/whitepaper',
    name: 'whitepaper',
    component: () => import('../views/Whitepaper.vue')
  },
  {
    path: '/chainview',
    name: 'chainview',
    component: () => import('../views/ChainView.vue')
  },
  {
    path: '/summary',
    name: 'summary',
    component: () => import('../views/Summary.vue')
  },
  {
    path: '/:issue/vote',
    name: 'issue-vote',
    component: () => import('../views/IssueVote.vue')
  },
  {
    path: '/:issue',
    name: 'issue',
    component: () => import('../views/Issue.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
