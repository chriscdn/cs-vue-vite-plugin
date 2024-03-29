import { type PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<number[]>;
        required: true;
    };
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
}, unknown, unknown, {
    userIdsLocal: {
        set(value: Array<number | null>): void;
        get(): Array<number | null>;
    };
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<number[]>;
        required: true;
    };
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
}>>, {
    users: boolean;
    groups: boolean;
    legacy: boolean;
    readonly: boolean;
}, {}>;
export default _default;
