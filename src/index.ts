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

import { type App } from "vue";
import { type Configuration } from "./injection";
/**
 * This variable gets assigned in the install, and is made available to the
 * useSession composible.
 */

// let session = null as Session | null;

// type TOptions = {
//   registerComponents?: boolean;
//   includeComponents?: string[];
// };

export const createVueVitePlugin = (initialState: WindowInitialState) => {
  const session: Session = new Session(initialState);

  const plugin = {
    install(app: App) {
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

export const createVueViteRegisterComponentsPlugin = () => {
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
      registerComponents(app);
    },
  };

  return plugin;
};

export * from "./components";
export * from "./types/RHNodeSerializer";
export * from "./types/RHUserSerializer";
export * from "./types/RHWorkStatusSerializer";
export * from "./types/WorkflowStatusEnum";
export * from "./types/RHNodeVersionSerializer";
export * from "./types/index";
export * from "./injection";

export { default as generalSort } from "./utils/general-sort";
export { default as nodeLookup } from "./utils/node-lookup";
export { default as userLookup } from "./utils/user-lookup";

export { useSmartUI } from "./composables/useSmartUI";
export { useAsyncData } from "./composables/useAsyncData";
export { useSnackbar } from "./composables/useSnackbar";
export { useConfirmDialog } from "./composables/useConfirmDialog";
export { useSession } from "./composables/useSession";
export { useConfig } from "./composables/useConfig";
export { useDateTimeFormatter } from "./composables/useDateTimeFormatter";
export { useCSUtils } from "./composables/useCSUtils";
