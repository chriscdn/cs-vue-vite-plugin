import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<any[]>;
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
}, unknown, unknown, {
    valueLocal: {
        get(): any[];
        set(value: Array<any>): void;
    };
    canAdd(): boolean;
    canRemove(): boolean;
    count(): number;
}, {
    add(index: number): void;
    remove(index: number): void;
    update(index: number, value: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<any[]>;
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
}, {}>;
export default _default;
