/**
 * Any project using this package should place `KApp` at the root of their project.
 * This includes the `KSnackbar` and `KConfirm` components, which can be used to
 * display snackbars and confirm dialogs to the user.
 *
 * This used to work with provide/inject to send messages to the KSnackbar compoment.
 * This gets a bit hairy with TypeScript.  To simplify this, we use an event emitter
 * to send messages.  This gets exported in the entry file to make usage simply:
 *
 * import { snackbar } from '@kweli/cs-vue-vite-plugin'
 *
 * Then, send a message:
 *
 * snackbar.success({title:"...", message:"..."})
 *
 * Fully typed, which is nice.
 *
 * TODO: Bring confirm into this.  This file could probably be renamed to something
 * more generic.
 */
import { Emitter } from 'mitt';
export interface SnackbarInterface {
    title?: string;
    message?: string;
    timeout?: number;
    actionLabel?: string;
    action?(cb: Function): void;
}
type Events = {
    success: SnackbarInterface;
    error: SnackbarInterface;
};
declare const emitter: Emitter<Events>;
declare function success(params: SnackbarInterface): void;
declare function error(params: SnackbarInterface): void;
export { emitter, success, error };
