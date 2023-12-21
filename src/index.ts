import { Session } from "@kweli/cs-rest";
import { DateTimeFormatter } from "./utils/date-formatter";
import {
  configKey,
  dateTimeFormatterKey,
  sessionKey,
  WindowInitialState,
} from "./injection";

import "./tailwind.pcss";
import "./styles.pcss";

import { inject, type App } from "vue";
import { type Configuration } from "./injection";
/**
 * This variable gets assigned in the install, and is made available to the
 * useSession composible.
 */

// let session = null as Session | null;

type TOptions = {
  registerComponents?: boolean;
  includeComponents?: string[];
};

export const createVueVitePlugin = (
  initialState: WindowInitialState,
  options: Partial<TOptions> = {}
) => {
  const session = new Session(initialState);

  const registerComponents = (app: App) => {
    const globalComponents = import.meta.glob("./components/**/*.vue", {
      eager: true,
    });

    Object.entries(globalComponents).forEach(
      ([item, definition]: [string, any]) => {
        // Get name of component, based on filename
        // "./components/Fruits.vue" will become "Fruits"
        const componentName = item
          ?.split("/")
          ?.pop()
          ?.replace(/\.\w+$/, "")!;

        app.component(componentName, definition.default);
      }
    );
  };

  const plugin = {
    install(app: App) {
      if (options.registerComponents) {
        registerComponents(app);
      }

      const configuration: Configuration = {
        userId: initialState.userId,
        img: initialState.img,
        baseUrl: initialState.baseUrl,
        jsLongDateFormat: initialState.datelong,
        jsShortDateFormat: initialState.dateshort,
      };

      app.provide(sessionKey, session);
      app.provide(configKey, configuration);

      app.provide(
        dateTimeFormatterKey,
        new DateTimeFormatter(initialState.datelong, initialState.dateshort)
      );
    },
  };

  return plugin;
};

export { default as nodeLookup } from "./utils/node-lookup";
export { default as userLookup } from "./utils/user-lookup";
export { useSmartUI } from "./composables/useSmartUI";
export * from "./components";
export * from "./types/RHNodeSerializer";
export * from "./types/RHUserSerializer";
export * from "./types/index";
export { default as generalSort } from "./utils/general-sort";
export * from "./injection";

export const useSession = (): Session => {
  const session = inject(sessionKey, null) as Session | null;
  if (!session) {
    throw new Error(
      "Failed to inject session. Make sure @kweli/cs-vue-vite-plugin is set up properly."
    );
  }
  return session;
};
