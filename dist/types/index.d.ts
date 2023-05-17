import { Session } from "@kweli/cs-rest";
import "./tailwind.pcss";
import "./styles.pcss";
import type { App } from "vue";
import { WindowInitialState } from "./injection";
export * from "./injection";
declare const _default: {
    install(app: App, options: WindowInitialState): void;
};
export default _default;
export { default as nodeLookup } from "./utils/node-lookup";
export { default as userLookup } from "./utils/user-lookup";
export declare const useSession: () => Session;
export { useSmartUI } from "./composables/useSmartUI";
export * from "./types/RHNodeSerializer";
export * from "./types/RHUserSerializer";
export * from "./types/index";
export { default as generalSort } from "./utils/general-sort";
