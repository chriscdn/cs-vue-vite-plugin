declare const _default: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").DefineComponent<{
    color: {
        type: import("vue").PropType<string>;
        default: null;
    };
    textColor: {
        type: import("vue").PropType<string>;
        default: null;
    };
}, unknown, unknown, {
    resolvedColor(): string;
    resolvedTextColor(): string;
    colorableTextStyle(): {
        color: string;
    };
    colorableTextStyleForBackground(): {
        color: string;
    };
    colorableBackgroundStyle(): {
        backgroundColor: string;
    };
}, {
    resolveColor(txt: string): string;
    fontColorForBackgroundColor(backgroundColor: string): "#000" | "#fff";
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: import("vue").PropType<string>;
        default: null;
    };
    textColor: {
        type: import("vue").PropType<string>;
        default: null;
    };
}>>, {
    color: string;
    textColor: string;
}, {}>, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>;
export default _default;
