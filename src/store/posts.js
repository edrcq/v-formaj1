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
        },
        add_latest(state, post) {
            state.latests.splice(0, 0, post)
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
        },

        async addPost({ commit }, post) {
            post.createdAt = +new Date()
            post.updatedAt = +new Date()
            try {
                const { data } = await Posts.create(post)
                commit('add_latest', data)
            }
            catch(err) {
                console.error(err)
            }
        },

        async update(context, post) {
            post.updatedAt = +new Date()
            try {
                const { data } = await Posts.update(post, post.id)
                return data
            }
            catch(err) {
                console.error(err)
            }
        }
    },
    getters: {
        
    },
};
