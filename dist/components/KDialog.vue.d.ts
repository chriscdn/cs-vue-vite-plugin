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
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
    maxHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
    maxWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
    minHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
    minWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
    width: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
}, unknown, unknown, {
    measurableStyles(): import("vue").CSSProperties;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    height: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
    maxHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
    maxWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
    minHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
    minWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
    width: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
}>>, {
    height: string | number;
    maxHeight: string | number;
    maxWidth: string | number;
    minHeight: string | number;
    minWidth: string | number;
    width: string | number;
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
    maxHeight: string | number;
    width: string | number;
    persistent: boolean;
    scrollable: boolean;
    zIndex: number;
}, {}>;
export default _default;
