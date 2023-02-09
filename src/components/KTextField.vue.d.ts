declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: StringConstructor;
        default: null;
    };
    placeholder: {
        type: StringConstructor;
        default: null;
    };
}, any, any, {
    value: {
        get(): any;
        set(value: any): void;
    };
}, {}, {
    props: {
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
    };
    computed: {
        hasSuccess(): any;
        hasError(): any;
        classObj(): {
            'k-input': boolean;
            'k-input--success': boolean;
            'k-input--error': () => any;
        };
    };
}, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        default: null;
    };
    placeholder: {
        type: StringConstructor;
        default: null;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string;
    placeholder: string;
}>;
export default _default;
