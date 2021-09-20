export default {
    install(Vue, _options) {
        const components = import.meta.globEager('./components/**/*.vue')

        Object.entries(components).forEach(([path, definition]) => {
            // Get name of component, based on filename
            // "./components/Fruits.vue" will become "Fruits"
            const componentName = path
                .split('/')
                .pop()
                .replace(/\.\w+$/, '')

            Vue.component(componentName, definition.default)
        })
    },
}
