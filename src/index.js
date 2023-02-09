import { Session } from '@kweli/cs-rest'
import './styles.css'

// import './assets/tailwind.css'

/**
 * This variable gets assigned in the install, and is made available to the
 * useSession composible.
 */
// let session

export default {
  install(app, options) {
    const components = import.meta.globEager('./components/**/*.vue')

    Object.entries(components).forEach(([path, definition]) => {
      // Get name of component, based on filename
      // "./components/Fruits.vue" will become "Fruits"
      const componentName = path
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')

      app.component(componentName, definition.default)
    })

    // app.config.globalProperties.$img = options.img
    // app.config.globalProperties.$cgi = options.baseURL
    // app.config.globalProperties.$jsLongDateFormat = options.datelong
    // app.config.globalProperties.$jsShortDateFormat = options.dateshort
    // app.config.globalProperties.$session = new Session(options)

    const session = new Session(options)

    app.provide('session', session)
    app.provide('config', {
      img: options.img,
      baseURL: options.baseURL,
      jsLongDateFormat: options.datelong,
      jsShortDateFormat: options.dateshort,
    })
  },
}

// function useSession() {
//   return session
// }

// export { useSession }
