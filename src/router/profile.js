/**
 * Created by qianqing on 2017/1/22.
 */
// require.ensure 是 Webpack 的特殊语法，用来设置 组件到底路径
/**
 * 1.定义路由，每个路由应该映射一个组件
 * path : 浏览器的显示的路径
 * name ： 路由的名字
 * component : 路由的组件路径
 */
const routers = [
  {
    path: '/profile',
    name: 'profile',
    component(resolve) {
      require.ensure(['../views/profile-basic.vue'], () => {
        resolve(require('../views/profile-basic.vue'));
      });
    },
    meta: {requiresAuth: false, title: '详情页-基础详情页'}
  },
  {
    path: '/profile-advance',
    name: 'profile-advance',
    component(resolve) {
      require.ensure(['../views/profile-advance.vue'], () => {
        resolve(require('../views/profile-advance.vue'));
      });
    },
    meta: {requiresAuth: false, title: '详情页-高级详情页'}
  }
];

export default routers;
