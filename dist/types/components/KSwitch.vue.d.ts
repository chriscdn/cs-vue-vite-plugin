import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<boolean>;
        default: boolean;
    };
}, unknown, {
    padding: number;
    height: number;
    trans: number;
}, {
    on: {
        get(): boolean;
        set(value: boolean): void;
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
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<boolean>;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: boolean;
}>;
export default _default;
