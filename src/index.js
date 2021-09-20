import PageTitle from './components/PageTitle.vue'

export default {
	install(Vue, options) {
		// Vue.component('PageTitle', PageTitle)
		// 
		const components = import.meta.globEager('./components/**/*.vue')
		// const components =
			// import.meta.glob('./components/**/*.vue')

		Object.entries(components).forEach(([path, definition]) => {
			// Get name of component, based on filename
			// "./components/Fruits.vue" will become "Fruits"
			const componentName = path
				.split('/')
				.pop()
				.replace(/\.\w+$/, '')

			// console.log(componentName)
			// console.log(definition)
			// Register component on this Vue instance
			Vue.component(componentName, definition.default)
		})

		// console.log(components)
	}
}