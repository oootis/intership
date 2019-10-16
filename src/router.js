import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import List from '@/views/List'

Vue.use(Router)

export default new Router({
   routes: [{
     path: '/',
     component: Login  
   },
   {
     path: '/List',
     component: List
   }
  ]
})

  






