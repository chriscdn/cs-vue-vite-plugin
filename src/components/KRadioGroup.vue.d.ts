declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (StringConstructor | ObjectConstructor | NumberConstructor)[];
        default: null;
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
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
}, any, any, {
    localValue: {
        get(): any;
        set(value: any): void;
    };
    classObj(): {
        'k-radiogroup--vertical': any;
    };
}, {
    isObject(obj: any): boolean;
    getItemText(item: any): any;
    getItemValue(item: any): any;
    getItemDisabled(item: any): any;
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
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    items: unknown[];
    modelValue: string | number | Record<string, any>;
    itemValue: string;
    itemText: string;
    loading: boolean;
    vertical: boolean;
}>;
export default _default;
