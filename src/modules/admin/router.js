const routes = [
    {
        path: '/admin',
        name: 'admin',
        component: () => import(/* webpackChunkName: "admin" */ './views/Admin.vue'),
        meta: {
            requireAuth: true,
        },
        children: [
            {
                path: 'add-post',
                component: () => import(/* webpackChunkName: "admin" */ './views/AddPost.vue'),
            },
            {
                path: 'update-post/:id',
                component: () => import(/* webpackChunkName: "admin" */ './views/UpdatePost.vue'),
            },
            {
                path: 'stats',
                component: () => import(/* webpackChunkName: "admin" */ './views/Stats.vue'),
            }
        ]
    }
]

export default routes