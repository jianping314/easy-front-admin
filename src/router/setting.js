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
    path: '/setting',
    name: 'setting',
    component(resolve) {
      require.ensure(['../views/setting-banner.vue'], () => {
        resolve(require('../views/setting-banner.vue'));
      });
    },
    meta: {requiresAuth: false, title: '官网设置-轮播图设置'}
  },
  {
    path: '/setting-column',
    name: 'setting-column',
    component(resolve) {
      require.ensure(['../views/setting-column.vue'], () => {
        resolve(require('../views/setting-column.vue'));
      });
    },
    meta: {requiresAuth: false, title: '官网设置-栏目设置'}
  },
  {
    path: '/setting-column-edit',
    name: 'setting-column-edit',
    component(resolve) {
      require.ensure(['../views/setting-column-edit.vue'], () => {
        resolve(require('../views/setting-column-edit.vue'));
      });
    },
    meta: {requiresAuth: false, title: '官网设置-栏目设置-编辑'}
  }
];

export default routers;
