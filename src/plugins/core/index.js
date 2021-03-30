import { focus } from './directives'
// import AdminBlock from '@/components/AdminBlock.vue'

export default {
    install(Vue) {
        Vue.directive('focus', focus)
       // Vue.component('admin-block', AdminBlock)
    }
}