import { instance } from '../common/axios'

const loginUrl = 'https://forma.digyx.io/api/login'

export default {
    namespaced: true,

    state: {
        token: '',
    },
    mutations: {
        token(state, token) {
            state.token = token
            localStorage.setItem('jwt_token', token)
        }
    },
    actions: {
        async login(context, { email, password }) {
            try {
                const { data } = await instance.post(loginUrl, { email, password })
                context.commit('token', data.token)
            }
            catch (err) {
                console.error(err)
                
            }
        }
    },
    getters: {
        
    },
};
