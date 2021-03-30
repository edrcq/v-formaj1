import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import init_guards from './router/auth.guards'
import importModules from './common/importModules'

import "./assets/style.scss";
import "billboard.js/dist/billboard.css";

/* our plugins */
import * as axiosPlugin from './plugins/axios';
import BBChart from './plugins/billboard/BillboardChart';
import corePlugin from './plugins/core'

Vue.use(axiosPlugin);
Vue.component('bb-chart', BBChart);
Vue.use(corePlugin)

/* lazy load */
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1,
  loading: require('./assets/loading.gif')
})

import vueDebounce from 'vue-debounce'
Vue.use(vueDebounce, {
  listenTo: 'input'
})

Vue.config.productionTip = false;

init_guards(router, store)
store.dispatch('init')

importModules({ store, router })
  .then(() => {

    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');

  })
