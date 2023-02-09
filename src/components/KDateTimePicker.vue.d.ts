declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (StringConstructor | DateConstructor)[];
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
}, any, any, {
    type(): "datetime-local" | "date";
    localModelValue: {
        set(value: any): void;
        get(): any;
    };
}, {
    parse(value: any): Date | null;
    setToNow(): void;
    formatForDatePicker(value: any): string | null;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | DateConstructor)[];
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
    modelValue: string | Date;
    editable: boolean;
}>;
export default _default;
