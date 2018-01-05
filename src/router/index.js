import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import AccountManage from '@/components/AccountManage'
import SecurityStrategy from '@/components/SecurityStrategy'
import Details from '@/components/Details'
import Login from '@/components/Login'
import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
  // 去掉默认link-active样式
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  mode: 'history',// 去掉hash #
  routes: [
    {
      path: '/',
      redirect: '/login'// 直接跳转的路径
    },
    {
      path: '/login',
      name: 'Login',// 直接跳转的路径
      component: Login
    },
    {
      path: '/index',
      name: '/index',// 直接跳转的路径
      component: Index,
      children: [
        {
          path:'',//就是加载的路径名字
          redirect: '/index/HomePage'// 直接跳转的路径
        },
        {
          path:'HomePage',//就是加载的路径名字
          name:'HomePage',//随便起的
          component:HomePage//跟import名字一样 
        },
        {
          path: 'AccountManage',
          name: 'AccountManage',
          component: AccountManage
        },
        {
          path: 'SecurityStrategy',
          name: 'SecurityStrategy',
          component: SecurityStrategy     
        },
        {
          path: 'Details',
          name: 'Details',
          component: Details
        }
      ]
    }
  ]
})
