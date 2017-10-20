/**
 * Created by qianqing on 2017/1/22.
 */
import Vue from 'vue';
import Vuex from 'vuex';

import customerMutations from './customer/mutations';
import customerAcions from './customer/actions';
import customerGetters from './customer/getters';

Vue.use(Vuex);

const customer = {
  state: {
    info: {}
  },
  getters: customerGetters,
  actions: customerAcions,
  mutations: customerMutations
};

export default new Vuex.Store({
  state: {
    token: ''
  },
  modules: {
    customer
  }
});
