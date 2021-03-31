
// import { actionError } from '../common/errorHandler'

import actions from './actions'

export const mutations = {
    token(state, token) {
        state.token = token
        localStorage.setItem('jwt_token', token)
    }
}

export const state = {
    token: '',
}

export default {
    namespaced: true,

    state,
    mutations,
    actions,
    
    getters: {
        
    },
};
