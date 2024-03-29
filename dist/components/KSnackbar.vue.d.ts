import { SnackbarParameters } from "../injection";
interface SnackbarQueueInterface extends SnackbarParameters {
    index: number;
    type: "success" | "error";
}
declare const _default: import("vue").DefineComponent<{}, {}, {
    index: number;
    nitems: SnackbarQueueInterface[];
}, {
    items(): {
        index: number;
        type: "success" | "error";
        title?: string | undefined;
        message?: string | undefined;
        timeout?: number | undefined;
        actionLabel?: string | undefined;
        action?: ((cb: Function) => void) | undefined;
    }[];
}, {
    classObj(item: SnackbarQueueInterface): {
        "k-snackbar-item--success": boolean;
        "k-snackbar-item--error": boolean;
    };
    action(item: SnackbarQueueInterface): void;
    dismiss(index: number): void;
    nextIndex(): number;
    success(params: SnackbarParameters): void;
    error(params: SnackbarParameters): void;
    queue(type: "success" | "error", { title, message, timeout, actionLabel, action, }: SnackbarParameters): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>;
export default _default;
