export default function init_guards(router, store) {

    router.beforeEach((to, from, next) => {
        // todo verify exp, validity..
        console.log({ to, from, token: store.state.auth.token })
        if (store.state.auth.token === '' && to.meta.requireAuth ==  true) {
            return next('/login')
        }
        
        next()
    })
}