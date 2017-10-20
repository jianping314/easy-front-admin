// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import AjaxPlugin from './plugins/ajax';
import VueLazyload from 'vue-lazyload'; // 引入图片懒加载模块
import inputPrice from './directive/input-price';
import inputQuantity from './directive/input-quantity';
import mixins from './mixins';
import iView from 'iview';
import './theme/index.less';
import './assets/css/my.less';

Vue.use(iView);
Vue.use(AjaxPlugin);
Vue.use(inputPrice);
Vue.use(inputQuantity);
Vue.use(require('vue-wechat-title'));

Vue.mixin(mixins);

// error，loading是图片路径, 用require引入
Vue.use(VueLazyload, {
  error: require('./assets/images/404.gif'),
  loading: require('./assets/images/loading.gif'),
  attempt: 1
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
  });
