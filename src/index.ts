import { Session } from '@kweli/cs-rest'
import './styles.css'
import type { App } from 'vue'
import { sessionKey, configKey, WindowInitialState } from './injection'
import type { Configuration } from './injection'

export * from './injection'

/**
 * This variable gets assigned in the install, and is made available to the
 * useSession composible.
 */
const globalComponents = import.meta.glob('./components/**/*.vue', {
  eager: true,
})

export default {
  install(app: App, options: WindowInitialState) {
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

    const configuration: Configuration = {
      img: options.img,
      baseUrl: options.baseUrl,
      jsLongDateFormat: options.datelong,
      jsShortDateFormat: options.dateshort,
    }

    app.provide(sessionKey, session)
    app.provide(configKey, configuration)
  },
}