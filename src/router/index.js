import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'
import Index from '../views/Index'
import Category from '../views/Category.vue'
import Notice from '../views/Notice.vue'
import Profile from '../views/Profile.vue'
import FavCity from "../views/FavCity";
import FavSubject from "../views/FavSubject";
import FavReport from "../views/FavReport";

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
    path: "/fav/city",
    component: FavCity
  },
  {
    path: "/fav/subject",
    component: FavSubject
  },
  {
    path: "/fav/report",
    component: FavReport
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
        path: 'notice',
        component: Notice
      },
      {
        path: "profile",
        component: Profile
      }
    ]
  }
];

export default new VueRouter({
  mode: 'history',
  routes: routes
});

