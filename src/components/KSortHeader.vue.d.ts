declare const _default: import("vue").DefineComponent<{
    keypath: {
        type: StringConstructor;
        required: true;
    };
    modelValue: {
        type: ObjectConstructor;
        default: () => void;
    };
}, any, any, {
    sortKey(): any;
    sortAsc(): boolean;
    isActive(): boolean;
}, {
    emitClick(): any;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    keypath: {
        type: StringConstructor;
        required: true;
    };
    modelValue: {
        type: ObjectConstructor;
        default: () => void;
    };
}>>, {
    modelValue: Record<string, any>;
}>;
export default _default;
