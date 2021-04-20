import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Recommend from '../views/Recommend.vue'
import Sort from '../views/Sort.vue'
import User from '../views/User.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/recommend',
    name: 'recommend',
    component: Recommend
  },
  {
    path: '/sort',
    name: 'Sort',
    component: Sort
  },
  {
    path: '/user',
    name: 'User',
    component: User
  }
];

const router = new VueRouter({
  routes
});

export default router
