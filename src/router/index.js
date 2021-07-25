import Vue from 'vue'
import Router from 'vue-router'
import { getToken, removeToken } from '@/utils/token'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home'
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
    component: () => import('@/views/profile/FavReport')
  },
  {
    path: "/fav/city",
    component: () => import('@/views/profile/FavCity')
  },
  {
    path: "/fav/subject",
    component: () => import('@/views/profile/FavSubject')
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
        component: () => import('@/views/category/Category')
      },
      {
        path: 'notice',
        component: () => import('@/views/Notice')
      },
      {
        path: "profile",
        component: () => import('@/views/profile/Profile')
      }
    ]
  }
]

const router = new Router({
  mode: 'hash',
  routes: routes
})

const whiteList = ['/login', '/register']

router.beforeEach((to, from, next) => {
  const hasToken = getToken()
  if (hasToken) {
    if (to.path === '/login') {
      next("/home")
    } else {
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  }
})

export default router