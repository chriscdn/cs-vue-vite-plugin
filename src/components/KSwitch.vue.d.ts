declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
}, any, {
    padding: number;
    height: number;
    trans: number;
}, {
    on: {
        get(): boolean;
        set(value: any): void;
    };
    classObj(): {
        'k-switch--on': boolean;
    };
    innerSize(): number;
    heightPx(): string | undefined;
    innerSizePx(): string | undefined;
    paddingPx(): string | undefined;
    switchWidthPx(): string | undefined;
    transPx(): string;
}, {
    clicked(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: boolean;
}>;
export default _default;
