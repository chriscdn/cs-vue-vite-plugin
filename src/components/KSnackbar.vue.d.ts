declare const _default: import("vue").DefineComponent<{}, {}, {
    index: number;
    nitems: {};
}, {
    items(): any[];
}, {
    classObj(item: any): {
        'k-snackbar-item--success': boolean;
        'k-snackbar-item--error': boolean;
    };
    action(item: any): void;
    dismiss(index: any): void;
    nextIndex(): number;
    success({ title, message, timeout, actionLabel, action }: {
        title: any;
        message: any;
        timeout: any;
        actionLabel: any;
        action: any;
    }): void;
    error({ title, message, timeout, actionLabel, action }: {
        title: any;
        message: any;
        timeout: any;
        actionLabel: any;
        action: any;
    }): void;
    queue(type: any, { title, message, timeout, actionLabel, action }: {
        title: any;
        message: any;
        timeout?: number | undefined;
        actionLabel?: string | undefined;
        action: any;
    }): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _default;
