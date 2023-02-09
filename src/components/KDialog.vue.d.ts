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
}, any, {
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
}, {
    props: {
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
    };
    computed: {
        measurableStyles(): {
            height: string;
            minHeight: string;
            minWidth: string;
            maxHeight: string;
            maxWidth: string;
            width: string;
        };
    };
}, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    zIndex: number;
    modelValue: boolean;
    persistent: boolean;
    scrollable: boolean;
}>;
export default _default;
