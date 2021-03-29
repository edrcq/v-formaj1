import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import "./assets/style.scss";
import "billboard.js/dist/billboard.css";

import * as axiosPlugin from './plugins/axios';
import BBChart from './plugins/billboard/BillboardChart';

Vue.use(axiosPlugin);
Vue.component('bb-chart', BBChart)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
