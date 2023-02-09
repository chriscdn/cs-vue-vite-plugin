declare const _default: import("vue").DefineComponent<{
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
}, any, {
    visibleLocal: boolean;
}, {}, {
    dismiss(): void;
}, {
    props: {
        color: {
            type: StringConstructor;
            default: null;
        };
    };
    computed: {
        resolvedColor(): any;
        colorableTextStyle(): {
            color: () => any;
        };
        colorableBackgroundStyle(): {
            backgroundColor: () => any;
        };
    };
}, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    visible: boolean;
}>;
export default _default;
