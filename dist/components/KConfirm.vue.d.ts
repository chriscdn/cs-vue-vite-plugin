declare const _default: import("vue").DefineComponent<{}, {}, {
    dialog: boolean;
    noLabel: string | null;
    yesLabel: string | null;
    title: string | null;
    message: string | null;
    resolve: Function | null;
}, {}, {
    dismiss(bool: boolean): void;
    alert({ yesLabel, title, message, }: {
        yesLabel: string;
        title: string | null;
        message: string | null;
    }): Promise<unknown>;
    confirm({ noLabel, yesLabel, title, message, }: {
        noLabel?: string | undefined;
        yesLabel: string;
        title: string | null;
        message: string | null;
    }): Promise<unknown>;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>;
export default _default;
