import Vue from 'vue'
import Router from 'vue-router'
import KriptoValute from '@/components/KriptoValute'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'KriptoValute',
      component: KriptoValute
    }
  ]
})
