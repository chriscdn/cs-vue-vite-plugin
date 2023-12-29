import { TSort } from "../types";
import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    keypath: {
        type: StringConstructor;
        required: true;
    };
    modelValue: {
        type: PropType<TSort>;
        default: () => void;
    };
}, unknown, unknown, {
    sortKey(): string | null;
    sortAsc(): boolean;
    isActive(): boolean;
}, {
    emitClick(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    keypath: {
        type: StringConstructor;
        required: true;
    };
    modelValue: {
        type: PropType<TSort>;
        default: () => void;
    };
}>>, {
    modelValue: TSort;
}, {}>;
export default _default;
