import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/reserve',
      name: 'reserve',
      meta: {layout: 'empty'},
      component: () => import('./views/Reserve.vue')
    },
    {
      path: '/login',
      name: 'login',
      //meta: {layout: 'empty'},
      component: () => import('./views/Login.vue')
    },
    {
      path: '/login-admin',
      name: 'login-admin',
      //meta: {layout: 'empty'},
      component: () => import('./views/Login-admin.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      //meta: {layout: 'empty'},
      component: () => import('./views/Admin.vue')
    },
    {
      path: '/register',
      name: 'register',
      //meta: {layout: 'empty'},
      component: () => import('./views/Register.vue')
    }
    
  ]
})
