import { instance } from '../../common/axios'

const loginUrl = 'https://forma.digyx.io/api/login'

export default {
    async login(context, { email, password }) {
        const { data } = await instance.post(loginUrl, { email, password })
        context.commit('token', data.token)
    }
}