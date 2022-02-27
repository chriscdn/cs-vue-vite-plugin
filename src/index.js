import { Session } from '@kweli/cs-rest'
import './styles.less'

export default {
  install(Vue, options) {
    const components = import.meta.globEager('./components/**/*.vue')

    Object.entries(components).forEach(([path, definition]) => {
      // Get name of component, based on filename
      // "./components/Fruits.vue" will become "Fruits"
      const componentName = path
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')

      // console.log(componentName)

      Vue.component(componentName, definition.default)
    })

    Vue.config.globalProperties.$img = options.img
    Vue.config.globalProperties.$cgi = options.baseURL
    Vue.config.globalProperties.$jsLongDateFormat = options.datelong
    Vue.config.globalProperties.$jsShortDateFormat = options.dateshort

    Vue.config.globalProperties.$session = new Session(options)
  },
}
