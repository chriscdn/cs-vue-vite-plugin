import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (NumberConstructor | ObjectConstructor | StringConstructor)[];
        default: null;
    };
    multiple: {
        type: PropType<boolean>;
        default: boolean;
    };
    items: {
        type: PropType<string | Record<string, any>>;
        default: () => never[];
    };
    loading: {
        type: PropType<boolean>;
        default: boolean;
    };
    itemValue: {
        type: PropType<string>;
        default: string;
    };
    itemText: {
        type: PropType<string>;
        default: string;
    };
}, unknown, unknown, {
    localValue: {
        get(): string | number | Record<string, any>;
        set(value: any): void;
    };
}, {
    isObject(obj: any): boolean;
    getItemText(item: string): any;
    getItemValue(item: any): any;
    arrify(item: any): Array<any>;
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
        'k-input': boolean;
        'k-input--success': boolean;
        'k-input--error': boolean;
    };
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    successMessages: unknown[];
    errorMessages: unknown[];
}>, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (NumberConstructor | ObjectConstructor | StringConstructor)[];
        default: null;
    };
    multiple: {
        type: PropType<boolean>;
        default: boolean;
    };
    items: {
        type: PropType<string | Record<string, any>>;
        default: () => never[];
    };
    loading: {
        type: PropType<boolean>;
        default: boolean;
    };
    itemValue: {
        type: PropType<string>;
        default: string;
    };
    itemText: {
        type: PropType<string>;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string | number | Record<string, any>;
    items: string | Record<string, any>;
    itemValue: string;
    itemText: string;
    loading: boolean;
    multiple: boolean;
}>;
export default _default;
