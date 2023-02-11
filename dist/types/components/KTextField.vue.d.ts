import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<string | null>;
        default: null;
    };
    placeholder: {
        type: PropType<string | undefined>;
        default: undefined;
    };
}, unknown, unknown, {
    value: {
        get(): string | null;
        set(value: string | null): void;
    };
}, {}, import("vue").DefineComponent<{
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
        type: PropType<string | null>;
        default: null;
    };
    placeholder: {
        type: PropType<string | undefined>;
        default: undefined;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string | null;
    placeholder: string | undefined;
}>;
export default _default;
