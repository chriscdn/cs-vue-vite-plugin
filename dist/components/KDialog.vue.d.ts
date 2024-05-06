import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<boolean>;
        required: false;
    };
    persistent: {
        type: PropType<boolean>;
        default: boolean;
    };
    scrollable: {
        type: PropType<boolean>;
        default: boolean;
    };
    width: {
        type: PropType<string | number>;
        default: string;
    };
    maxHeight: {
        type: PropType<string | number>;
        default: string;
    };
    zIndex: {
        type: PropType<number>;
        default: number;
    };
}, unknown, {
    dialog: boolean;
    mounted: boolean;
}, {
    classObj(): {
        "k-dialog--scrollable": boolean;
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
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
    width: string | number;
    height: string | number;
    maxHeight: string | number;
    minHeight: string | number;
    maxWidth: string | number;
    minWidth: string | number;
}, {}>, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<boolean>;
        required: false;
    };
    persistent: {
        type: PropType<boolean>;
        default: boolean;
    };
    scrollable: {
        type: PropType<boolean>;
        default: boolean;
    };
    width: {
        type: PropType<string | number>;
        default: string;
    };
    maxHeight: {
        type: PropType<string | number>;
        default: string;
    };
    zIndex: {
        type: PropType<number>;
        default: number;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    width: string | number;
    zIndex: number;
    maxHeight: string | number;
    persistent: boolean;
    scrollable: boolean;
}, {}>;
export default _default;
