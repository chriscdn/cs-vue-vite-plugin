import { Session } from '@kweli/cs-rest'
import './styles.css'
import type { App } from 'vue'
import { sessionKey, configKey } from '@/injection'
import type { ConfigurationType } from '@/injection'
import { success, error } from './snackbar'
const snackbar = { success, error }

// export { globz }
/**
 * This variable gets assigned in the install, and is made available to the
 * useSession composible.
 */
const globalComponents = import.meta.glob('./components/**/*.vue', {
  eager: true,
})

export default {
  install(app: App, options: Record<string, string>) {
    Object.entries(globalComponents).forEach(
      ([item, definition]: [string, any]) => {
        // Get name of component, based on filename
        // "./components/Fruits.vue" will become "Fruits"

        const componentName = item
          ?.split('/')
          ?.pop()
          ?.replace(/\.\w+$/, '')

        app.component(componentName!, definition.default)
      },
    )

    const session = new Session(options)

    const configuration: ConfigurationType = {
      img: options.img,
      baseURL: options.baseURL,
      jsLongDateFormat: options.datelong,
      jsShortDateFormat: options.dateshort,
    }

    app.provide(sessionKey, session)
    app.provide(configKey, configuration)
  },
}

export { snackbar }
export * from './injection'
