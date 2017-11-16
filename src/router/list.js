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
    path: '/list',
    name: 'list',
    component(resolve) {
      require.ensure(['../views/list-cover.vue'], () => {
        resolve(require('../views/list-cover.vue'));
      });
    },
    meta: {requiresAuth: false, title: '列表页-项目列表'}
  },
  {
    path: '/list-table',
    name: 'list-table',
    component(resolve) {
      require.ensure(['../views/list-table.vue'], () => {
        resolve(require('../views/list-table.vue'));
      });
    },
    meta: {requiresAuth: false, title: '表单页-分步表单'}
  }
];

export default routers;
