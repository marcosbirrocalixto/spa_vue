import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import login from '@/pages/login/login'
import cadastro from '@/pages/cadastro/cadastro'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: cadastro
    }
  ]
})
