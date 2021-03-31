import { actionError, axiosError } from '../common/errorHandler'

export default {
    install(Vue) {
        Vue.prototype.$actionError = actionError
        Vue.prototype.$axiosError = axiosError
    }
}