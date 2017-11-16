/**
 * Created by qianqing on 2017/1/22.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import home from './home';
import login from './login';
import setting from './setting';
import client from './client';
import goods from './goods';
import order from './order';
import form from './form';
import list from './list';
import profile from './profile';
import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    redirect: '/home',
    meta: {requiresAuth: false}
  },
  ...home,
  ...login,
  ...setting,
  ...client,
  ...goods,
  ...order,
  ...form,
  ...profile,
  ...list,
  {
    path: '*',
    component(resolve) {
      require.ensure(['../views/error_page/404.vue'], () => {
        resolve(require('../views/error_page/404.vue'));
      });
    }
  },
  {
    path: '/401',
    meta: {
      title: '401-权限不足'
    },
    name: 'error_401',
    component: resolve => { require(['../views/error_page/401.vue'], resolve); }
  },
  {
    path: '/500',
    meta: {
      title: '500-服务端错误'
    },
    name: 'error_500',
    component: resolve => { require(['../views/error_page/500.vue'], resolve); }
  }
];

// 页面刷新时，重新赋值token
// if (window.localStorage.getItem('token')) {
//   store.commit(types.LOGIN, window.localStorage.getItem('token'))
// }

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requiresAuth)) {
    if (store.state.token) {
      next();
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      });
    }
  } else {
    next();
  }
});

export default router;
