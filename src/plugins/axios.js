import { instance } from '@/common/axios';

function install(Vue) {
  Vue.prototype.$axios = instance;
}

export {
  install,
};
