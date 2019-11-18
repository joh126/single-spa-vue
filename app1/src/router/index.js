import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Test1 from '@/components/test1'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/app1',
      name: 'home',
      component: Home
    },
    {
      path: '/app1/test1',
      name: 'test1',
      component: Test1
    }
  ]
})
