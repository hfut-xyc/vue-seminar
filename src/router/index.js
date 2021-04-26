import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'
import Index from '../views/Index'
import Category from '../views/Category.vue'
import Notify from '../views/Notify.vue'
import Profile from '../views/Profile.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: "/register",
    component: Register
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '',
        redirect: 'index'
      },
      {
        path: 'index',
        component: Index
      },
      {
        path: 'category',
        component: Category
      },
      {
        path: 'notify',
        component: Notify
      },
      {
        path: "profile",
        component: Profile
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

export default router
