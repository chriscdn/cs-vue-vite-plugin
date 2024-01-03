import { WindowInitialState } from "./injection";
import "./tailwind.pcss";
import "./styles.pcss";
import { type App } from "vue";
/**
 * This variable gets assigned in the install, and is made available to the
 * useSession composible.
 */
export declare const createVueVitePlugin: (initialState: WindowInitialState) => {
    install(app: App): void;
};
export declare const createVueViteRegisterComponentsPlugin: () => {
    install(app: App): void;
};
export * from "./components";
export * from "./types/RHNodeSerializer";
export * from "./types/RHUserSerializer";
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
