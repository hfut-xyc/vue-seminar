import Vue from 'vue'
import Router from 'vue-router'
import { getToken } from '@/utils/token'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/views/Login'),
  },
  {
    path: "/register",
    component: () => import('@/views/Register')
  },
  {
    path: "/report/:id",
    component: () => import('@/views/ReportDetail')
  },
  {
    path: "/city/:id",
    component: () => import('@/views/category/City')
  },
  {
    path: "/subject/:id",
    component: () => import('@/views/category/Subject')
  },
  {
    path: "/fav/report",
    component: () => import('@/views/fav/FavReport')
  },
  {
    path: "/fav/city",
    component: () => import('@/views/fav/FavCity')
  },
  {
    path: "/fav/subject",
    component: () => import('@/views/fav/FavSubject')
  },
  {
    path: '/home',
    component: () => import('@/views/Home'),
    children: [
      {
        path: '',
        redirect: 'index'
      },
      {
        path: 'index',
        component: () => import('@/views/Index')
      },
      {
        path: 'category',
        component: () => import('@/views/Category')
      },
      {
        path: 'notice',
        component: () => import('@/views/Notice')
      },
      {
        path: "mine",
        component: () => import('@/views/Mine')
      }
    ]
  }
]

const router = new Router({
  // mode: 'hash',  // production environment
  mode: 'history',  // development environment
  routes: routes
})

const whiteList = ['/login', '/register']

router.beforeEach((to, from, next) => {
  const hasToken = getToken()
  if (hasToken) {
    if (whiteList.indexOf(to.path) !== -1) {  // 已经登录，还要访问登录和注册页面，直接弹回主页
      next("/home")
    } else {
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)      // 还未登录，访问主页面，直接弹回登录页
    }
  }
})

export default router