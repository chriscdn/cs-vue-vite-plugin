declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: BooleanConstructor;
        required: false;
    };
    persistent: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrollable: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    maxHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    zIndex: {
        type: NumberConstructor[];
        default: number;
    };
}, unknown, {
    dialog: boolean;
    mounted: boolean;
}, {
    classObj(): {
        'k-dialog--scrollable': boolean;
    };
    style(): {
        zIndex: number;
    };
}, {
    clickAway(): void;
    closeDialog(): void;
    on(): void;
}, import("vue").DefineComponent<{
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    maxHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    maxWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    minHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    minWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
}, unknown, unknown, {
    measurableStyles(): import("vue").CSSProperties;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    maxHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    maxWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    minHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    minWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
}>>, {
    height: string | number;
    maxHeight: string | number;
    maxWidth: string | number;
    minHeight: string | number;
    minWidth: string | number;
    width: string | number;
}>, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        required: false;
    };
    persistent: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrollable: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    maxHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    zIndex: {
        type: NumberConstructor[];
        default: number;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    maxHeight: string | number;
    width: string | number;
    modelValue: boolean;
    persistent: boolean;
    scrollable: boolean;
    zIndex: number;
}>;
export default _default;
