declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: ArrayConstructor;
        required: true;
    };
    maxItems: {
        type: NumberConstructor;
        default: number;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
}, any, any, {
    valueLocal: {
        get(): any;
        set(value: any): void;
    };
    count(): any;
    canAdd(): boolean;
}, {
    add(item: any): void;
    remove(index: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: ArrayConstructor;
        required: true;
    };
    maxItems: {
        type: NumberConstructor;
        default: number;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    readonly: boolean;
    maxItems: number;
}>;
export default _default;
