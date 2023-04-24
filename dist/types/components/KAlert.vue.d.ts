/** __vue_virtual_code_placeholder */
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
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: import("vue").PropType<string>;
        default: null;
    };
    textColor: {
        type: import("vue").PropType<string>;
        default: null;
    };
}>>, {
    textColor: string;
    color: string;
}>, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _default;
