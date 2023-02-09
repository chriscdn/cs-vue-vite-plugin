declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (StringConstructor | ObjectConstructor | NumberConstructor)[];
        default: null;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    items: {
        type: ArrayConstructor;
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
}, any, any, {
    localValue: {
        get(): any;
        set(value: any): void;
    };
}, {
    isObject(obj: any): boolean;
    getItemText(item: any): any;
    getItemValue(item: any): any;
    arrify(item: any): any[];
}, {
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
        type: (StringConstructor | ObjectConstructor | NumberConstructor)[];
        default: null;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    items: {
        type: ArrayConstructor;
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
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    items: unknown[];
    modelValue: string | number | Record<string, any>;
    itemValue: string;
    itemText: string;
    loading: boolean;
    multiple: boolean;
}>;
export default _default;
