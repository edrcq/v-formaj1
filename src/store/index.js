import Vue from 'vue';
import Vuex from 'vuex';

import posts from './posts';
import auth from './auth';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    init(context) {
      context.dispatch('posts/getLatest')
      const already_token = localStorage.getItem('jwt_token')
      if (already_token) {
        context.commit('auth/token', already_token)
      }
    }
  },
  modules: {
    posts: posts,
    auth,
  },
});
