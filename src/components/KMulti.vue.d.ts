declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: ArrayConstructor;
        required: true;
    };
    minItems: {
        type: NumberConstructor;
        default: number;
    };
    maxItems: {
        type: NumberConstructor;
        default: number;
    };
    template: {
        type: ObjectConstructor;
        default: null;
    };
}, any, any, {
    valueLocal: {
        get(): any;
        set(value: any): void;
    };
    canAdd(): boolean;
    canRemove(): boolean;
    count(): any;
}, {
    add(index: any): void;
    remove(index: any): void;
    update(index: any, value: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: ArrayConstructor;
        required: true;
    };
    minItems: {
        type: NumberConstructor;
        default: number;
    };
    maxItems: {
        type: NumberConstructor;
        default: number;
    };
    template: {
        type: ObjectConstructor;
        default: null;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    template: Record<string, any>;
    minItems: number;
    maxItems: number;
}>;
export default _default;
