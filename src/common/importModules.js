const modulesList = [
    'admin'
]

async function importModules({ store, router }) {
    for (let moduleName of modulesList) {
        const vModule = await import(`@/modules/${moduleName}`)

        store.registerModule(moduleName, vModule.store)
        router.addRoutes(vModule.routes)
    }
}

export default importModules