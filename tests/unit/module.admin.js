// import { createLocalVue, mount } from '@vue/test-utils'
// import VueRouter from 'vue-router'
// import Vuex from 'vuex'
// import Admin from '@/modules/admin/views/Admin.vue'

// // localVue = import Vue from 'vue'
// const localVue = createLocalVue()
// localVue.use(VueRouter)
// localVue.use(Vuex)

// const Appv = {
//     template: '<div class="appv"><router-view></router-view></div>'
// }

// const routes = [
//     {
//         path: '/',
//         component: Admin,
//         meta: {
//             requireAuth: true,
//         }
//     }
// ]

// const router = new VueRouter({
//     routes,
// })

// const wrapper = mount(Appv, {
//     localVue,
//     router,
//     mocks: {
//         $store: {
//             state: {
//                 auth: {
//                     token: ''
//                 }
//             }
//         }
//     }
// })



// describe('Admin Module', () => {
//     it('Is Super Token ?', () => {
//         expect(wrapper.vm.$store.state.auth.token).toBe("SUPERTOKEN")
//     })

//     it('Is Admin Page accessible ?', () => {
//         expect(wrapper.text()).toMatch('Admin Page')
//     })

//     it('Guest cannot access admin', () => {
//         const wrapperGuest = mount(Appv, {
//             localVue,
//             router,
//             mocks: { $store: { state: { auth: { token: '' }}}}
//         })
//         init_guards(router, wrapperGuest.vm.$store)
//         expect(wrapperGuest.text()).not.toMatch('Admin Page')
//     })
// })
