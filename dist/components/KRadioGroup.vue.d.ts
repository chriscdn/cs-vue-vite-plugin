import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (ObjectConstructor | NumberConstructor | StringConstructor)[];
        default: null;
    };
    items: {
        type: PropType<any[]>;
        default: () => never[];
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    itemValue: {
        type: StringConstructor;
        default: string;
    };
    itemText: {
        type: StringConstructor;
        default: string;
    };
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
}, unknown, unknown, {
    localValue: {
        get(): string | number | Record<string, any>;
        set(value: any): void;
    };
    classObj(): {
        "k-radiogroup--vertical": boolean;
    };
}, {
    isObject(obj: any): boolean;
    getItemText(item: string): any;
    getItemValue(item: any): any;
    getItemDisabled(item: any): any;
}, import("vue").DefineComponent<{
    label: {
        type: StringConstructor;
        default: null;
    };
    successMessages: {
        type: ArrayConstructor;
        default: () => never[];
    };
    errorMessages: {
        type: ArrayConstructor;
        default: () => never[];
    };
}, unknown, unknown, {
    hasSuccess(): boolean;
    hasError(): boolean;
    classObj(): {
        "k-input": boolean;
        "k-input--success": boolean;
        "k-input--error": boolean;
    };
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: StringConstructor;
        default: null;
    };
    successMessages: {
        type: ArrayConstructor;
        default: () => never[];
    };
    errorMessages: {
        type: ArrayConstructor;
        default: () => never[];
    };
}>>, {
    label: string;
    errorMessages: unknown[];
    successMessages: unknown[];
}, {}>, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (ObjectConstructor | NumberConstructor | StringConstructor)[];
        default: null;
    };
    items: {
        type: PropType<any[]>;
        default: () => never[];
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    itemValue: {
        type: StringConstructor;
        default: string;
    };
    itemText: {
        type: StringConstructor;
        default: string;
    };
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string | number | Record<string, any>;
    items: any[];
    loading: boolean;
    itemValue: string;
    itemText: string;
    vertical: boolean;
}, {}>;
export default _default;
