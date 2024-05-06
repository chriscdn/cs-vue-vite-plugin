import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    users: {
        type: PropType<boolean>;
        default: boolean;
    };
    groups: {
        type: PropType<boolean>;
        default: boolean;
    };
    readonly: {
        type: PropType<boolean>;
        default: boolean;
    };
    legacy: {
        type: PropType<boolean>;
        default: boolean;
    };
    modelValue: {
        type: PropType<number | null>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (modelValue: number | null) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    users: {
        type: PropType<boolean>;
        default: boolean;
    };
    groups: {
        type: PropType<boolean>;
        default: boolean;
    };
    readonly: {
        type: PropType<boolean>;
        default: boolean;
    };
    legacy: {
        type: PropType<boolean>;
        default: boolean;
    };
    modelValue: {
        type: PropType<number | null>;
        required: true;
    };
}>> & {
    "onUpdate:modelValue"?: ((modelValue: number | null) => any) | undefined;
}, {
    readonly: boolean;
    users: boolean;
    groups: boolean;
    legacy: boolean;
}, {}>;
export default _default;
