import './styles.css';
import type { App } from 'vue';
import { success, error } from './snackbar';
declare const snackbar: {
    success: typeof success;
    error: typeof error;
};
declare const _default: {
    install(app: App, options: Record<string, string>): void;
};
export default _default;
export { snackbar };
export * from './injection';
