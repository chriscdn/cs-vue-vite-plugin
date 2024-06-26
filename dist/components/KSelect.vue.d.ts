import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<string | number | Record<string, any> | null>;
        default: null;
    };
    multiple: {
        type: PropType<boolean>;
        default: boolean;
    };
    items: {
        type: PropType<(string | Record<string, any>)[]>;
        default: () => never[];
    };
    loading: {
        type: PropType<boolean>;
        default: boolean;
    };
    itemValue: {
        type: PropType<string>;
        default: string;
    };
    itemText: {
        type: PropType<string>;
        default: string;
    };
    itemGroup: {
        type: PropType<string>;
        default: string;
    };
    sortedGroupNames: {
        type: PropType<string[]>;
        default: () => never[];
    };
    itemDisabled: {
        type: PropType<string>;
        default: string;
    };
    disabled: {
        type: PropType<boolean>;
        default: boolean;
    };
    readonly: {
        type: PropType<boolean>;
        default: boolean;
    };
    clearable: {
        type: PropType<boolean>;
        default: boolean;
    };
}, unknown, unknown, {
    disabledResolved(): boolean;
    valueLocal: {
        get(): string | number | any[] | Record<string, any> | null;
        set(value: any): void;
    };
    hasGroups(): boolean;
    itemsGrouped(): [string, any[]][] | null;
}, {
    isObject(obj: any): boolean;
    getItemText(item: string | object): string;
    getItemValue(item: string | object): any;
    getItemDisabled(item: string | object): boolean;
    arrify(item: any): Array<any>;
}, import("vue").DefineComponent<{
    label: {
        type: StringConstructor;
        default: null;
    };
    successMessages: {
        type: ArrayConstructor;
        default: () => never[];
    };
    errorMessages: {
        type: ArrayConstructor;
        default: () => never[];
    };
}, unknown, unknown, {
    hasSuccess(): boolean;
    hasError(): boolean;
    classObj(): {
        "k-input": boolean;
        "k-input--success": boolean;
        "k-input--error": boolean;
    };
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: StringConstructor;
        default: null;
    };
    successMessages: {
        type: ArrayConstructor;
        default: () => never[];
    };
    errorMessages: {
        type: ArrayConstructor;
        default: () => never[];
    };
}>>, {
    label: string;
    successMessages: unknown[];
    errorMessages: unknown[];
}, {}>, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<string | number | Record<string, any> | null>;
        default: null;
    };
    multiple: {
        type: PropType<boolean>;
        default: boolean;
    };
    items: {
        type: PropType<(string | Record<string, any>)[]>;
        default: () => never[];
    };
    loading: {
        type: PropType<boolean>;
        default: boolean;
    };
    itemValue: {
        type: PropType<string>;
        default: string;
    };
    itemText: {
        type: PropType<string>;
        default: string;
    };
    itemGroup: {
        type: PropType<string>;
        default: string;
    };
    sortedGroupNames: {
        type: PropType<string[]>;
        default: () => never[];
    };
    itemDisabled: {
        type: PropType<string>;
        default: string;
    };
    disabled: {
        type: PropType<boolean>;
        default: boolean;
    };
    readonly: {
        type: PropType<boolean>;
        default: boolean;
    };
    clearable: {
        type: PropType<boolean>;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string | number | Record<string, any> | null;
    items: (string | Record<string, any>)[];
    loading: boolean;
    itemValue: string;
    itemText: string;
    readonly: boolean;
    disabled: boolean;
    clearable: boolean;
    multiple: boolean;
    itemGroup: string;
    sortedGroupNames: string[];
    itemDisabled: string;
}, {}>;
export default _default;
