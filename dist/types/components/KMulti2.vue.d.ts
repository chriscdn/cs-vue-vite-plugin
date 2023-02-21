import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<any[]>;
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
}, unknown, unknown, {
    valueLocal: {
        get(): any[];
        set(value: Array<any>): void;
    };
    count(): number;
    canAdd(): boolean;
}, {
    add(item: any): void;
    remove(index: number): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<any[]>;
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
    maxItems: number;
    readonly: boolean;
}>;
export default _default;