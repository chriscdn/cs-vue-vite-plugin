import { Session } from '@kweli/cs-rest'
import './styles.css'
import type { App } from 'vue'
// import './assets/tailwind.css'

/**
 * This variable gets assigned in the install, and is made available to the
 * useSession composible.
 */
// let session

interface Configuration {
  img: string
  baseURL: string
  jsLongDateFormat: string
  jsShortDateFormat: string
}

export default {
  install(app: App, options: Record<string, string>) {
    const components = import.meta.glob('./components/**/*.vue', {
      eager: true,
    })

    Object.entries(components).forEach(([item, definition]: [string, any]) => {
      // Get name of component, based on filename
      // "./components/Fruits.vue" will become "Fruits"

      const componentName = item
        ?.split('/')
        ?.pop()
        ?.replace(/\.\w+$/, '')

      app.component(componentName!, definition.default)
    })

    const session = new Session(options)

    const configuration: Configuration = {
      img: options.img,
      baseURL: options.baseURL,
      jsLongDateFormat: options.datelong,
      jsShortDateFormat: options.dateshort,
    }

    app.provide('session', session)
    app.provide('config', configuration)
  },
}

// const SessionKey: InjectionKey<Session> = Symbol('Session')

// function useSession() {
//   return session
// }

// export { useSession }
