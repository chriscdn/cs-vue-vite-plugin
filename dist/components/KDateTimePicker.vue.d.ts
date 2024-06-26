import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<string | Date | null>;
        default: null;
    };
    time: {
        type: BooleanConstructor;
        default: boolean;
    };
    editable: {
        type: BooleanConstructor;
        default: boolean;
    };
}, unknown, unknown, {
    type(): "date" | "datetime-local";
    localModelValue: {
        set(value: string | Date | null): void;
        get(): string | Date | null;
    };
}, {
    parse(value: string | Date | null): Date | null;
    setToNow(): void;
    formatForDatePicker(value: string | Date | null): string | null;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<string | Date | null>;
        default: null;
    };
    time: {
        type: BooleanConstructor;
        default: boolean;
    };
    editable: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    time: boolean;
    modelValue: string | Date | null;
    editable: boolean;
}, {}>;
export default _default;
