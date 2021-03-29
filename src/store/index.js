import Vue from 'vue';
import Vuex from 'vuex';

import posts from './posts';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    init(context) {
      context.dispatch('posts/getLatest')
    }
  },
  modules: {
    posts,
  },
});
