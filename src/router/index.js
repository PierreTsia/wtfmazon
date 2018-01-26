import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Shop from '@/components/Shop'
import Signin from '@/components/Signin'
import Signup from '@/components/Signup'
import Userdashboard from '@/components/Userdashboard'
import Admindashboard from '@/components/Admindashboard'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: Signin
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/user',
      name: 'User',
      component: Userdashboard
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admindashboard
    },
  ]
})
