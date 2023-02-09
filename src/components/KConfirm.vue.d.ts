declare const _default: import("vue").DefineComponent<{}, {}, {
    dialog: boolean;
    noLabel: string;
    yesLabel: string;
    title: null;
    message: null;
}, {}, {
    dismiss(bool: any): void;
    alert({ yesLabel, title, message }: {
        yesLabel?: string | undefined;
        title: any;
        message: any;
    }): Promise<any>;
    confirm({ noLabel, yesLabel, title, message }: {
        noLabel?: string | undefined;
        yesLabel?: string | undefined;
        title: any;
        message: any;
    }): Promise<any>;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _default;
