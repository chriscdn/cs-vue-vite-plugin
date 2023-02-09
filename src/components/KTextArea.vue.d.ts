declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: StringConstructor;
        default: null;
    };
    rows: {
        type: NumberConstructor;
        default: number;
    };
}, any, any, {
    outerStyle(): {
        width: any;
        height: any;
    };
    lineNumberItemStyle(): {
        lineHeight: any;
        fontSize: string;
    };
    textareaStyle(): {
        lineHeight: any;
        fontSize: any;
    };
    lineCount(): any;
    effectiveLineCount(): number;
    valueLocal: {
        set(value: any): void;
        get(): any;
    };
}, {
    tabber(event: any): void;
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
        type: StringConstructor;
        default: null;
    };
    rows: {
        type: NumberConstructor;
        default: number;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string;
    rows: number;
}>;
export default _default;
