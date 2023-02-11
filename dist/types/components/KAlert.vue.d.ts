declare const _default: import("vue").DefineComponent<{
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
}, unknown, {
    visibleLocal: boolean;
}, {}, {
    dismiss(): void;
}, import("vue").DefineComponent<{
    color: {
        type: import("vue").PropType<string>;
        default: null;
    };
}, unknown, unknown, {
    resolvedColor(): string;
    colorableTextStyle(): {
        color: string;
    };
    colorableBackgroundStyle(): {
        backgroundColor: string;
    };
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: import("vue").PropType<string>;
        default: null;
    };
}>>, {
    color: string;
}>, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    visible: boolean;
}>;
export default _default;
