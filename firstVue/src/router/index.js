import Vue from 'vue'
import Router from 'vue-router'
import ContextCenter from '@/components/ContextCenter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ContextCenter',
      component: ContextCenter
    }
  ]
})
