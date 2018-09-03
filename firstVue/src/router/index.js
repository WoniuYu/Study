import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Body/Home.vue'
import Study from '@/components/Body/Study/Study.vue'
import IndexStudy from '@/components/Body/Study/indexStudy.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
    	path: '/home',
    	name: 'Home',
    	component: Home
    },
    {
    	path: '/study',
    	name: 'Study',
    	component: Study,
    	// 学习模块的二级路由
    	children:[
    		{
    			path: 'indexstudy',
    			name: 'IndexStudy',
    			component: IndexStudy
    		}
    	]
    }
  ]
})
