import Repository from '../api';

const PostsViews = Repository.get('postsviews')

export default {
    namespaced: true,

    state: {
        
    },
    mutations: {
        
    },
    actions: {
        create(context, postId) {
            return PostsViews.create({
                postId,
                createdAt: +new Date()
            })
        },

        async getByDate(context, { postId, start, end }) {
            const { data } = await PostsViews.getByDate(start, end, postId)
            console.log({ data })
            return data
        }
    },
    getters: {
        
    },
};
