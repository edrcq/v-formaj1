import Repository from '../api';

const Posts = Repository.get('posts')

export default {
    namespaced: true,

    state: {
        latests: [],
    },
    mutations: {
        latests(state, list) {
            state.latests = list;
        }
    },
    actions: {
        getById(context, id) {
            return Posts.getById(id)
        },

        async getLatest({ commit }, max = 5) {
            const { data } = await Posts.getLatest(max)
            console.log({ data })
            commit('latests', data)
        }
    },
    getters: {
        
    },
};
