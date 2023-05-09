declare const _default: import("vue").DefineComponent<{
    properties: {
        type: BooleanConstructor;
        default: boolean;
    };
    striped: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
}, unknown, unknown, {
    classObj(): {
        "k-table--properties": boolean;
        "k-table--striped": boolean;
    };
    isStriped(): boolean;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    properties: {
        type: BooleanConstructor;
        default: boolean;
    };
    striped: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    loading: boolean;
    properties: boolean;
    striped: boolean;
}>;
export default _default;
