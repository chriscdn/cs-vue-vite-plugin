export declare const useSnackbar: () => {
    success({ title, message, timeout, actionLabel, action, }: import("../injection").SnackbarParameters): void;
    error({ title, message, timeout, actionLabel, action, }: import("../injection").SnackbarParameters): void;
};
