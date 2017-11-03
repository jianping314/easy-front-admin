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
    path: '/goods-manager',
    name: 'goods-manager',
    component(resolve) {
      require.ensure(['../views/goods-manager.vue'], () => {
        resolve(require('../views/goods-manager.vue'));
      });
    },
    meta: {requiresAuth: false, title: '商品管理-商品列表'}
  },
  {
    path: '/goods-add',
    name: 'goods-add',
    component(resolve) {
      require.ensure(['../views/goods-add.vue'], () => {
        resolve(require('../views/goods-add.vue'));
      });
    },
    meta: {requiresAuth: false, title: '商品管理-新增商品'}
  },
  {
    path: '/category-edit',
    name: 'category-edit',
    component(resolve) {
      require.ensure(['../views/category-edit.vue'], () => {
        resolve(require('../views/category-edit.vue'));
      });
    },
    meta: {requiresAuth: false, title: '商品管理-商品分类设置'}
  }
];

export default routers;
