import './styles.css';
import type { App } from 'vue';
import { WindowInitialState } from './injection';
export * from './injection';
declare const _default: {
    install(app: App, options: WindowInitialState): void;
};
export default _default;
