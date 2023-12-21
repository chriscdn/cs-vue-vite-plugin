import { Session } from "@kweli/cs-rest";
import { WindowInitialState } from "./injection";
import "./tailwind.pcss";
import "./styles.pcss";
import { type App } from "vue";
/**
 * This variable gets assigned in the install, and is made available to the
 * useSession composible.
 */
type TOptions = {
    registerComponents?: boolean;
    includeComponents?: string[];
};
export declare const createVueVitePlugin: (initialState: WindowInitialState, options?: Partial<TOptions>) => {
    install(app: App): void;
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
export declare const useSession: () => Session;
