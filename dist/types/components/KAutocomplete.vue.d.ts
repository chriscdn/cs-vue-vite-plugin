import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<string | number | Record<string, any> | null>;
        default: null;
    };
    itemValue: {
        type: StringConstructor;
        default: string;
    };
    itemText: {
        type: StringConstructor;
        default: string;
    };
    returnObject: {
        type: PropType<boolean>;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    items: {
        type: PropType<(string | Record<string, any>)[]>;
        default: () => never[];
    };
    loading: {
        type: PropType<boolean>;
        default: boolean;
    };
    combobox: {
        type: PropType<boolean>;
        default: boolean;
    };
    filter: {
        type: FunctionConstructor;
        default: (item: any) => boolean;
    };
    editable: {
        type: PropType<boolean>;
        default: boolean;
    };
}, unknown, {
    inputText: string | null;
    currentFocus: number;
    focus: boolean;
}, {
    style(): {
        width: string | undefined;
    };
    itemsFiltered(): (string | Record<string, any>)[];
    placeholderText(): string | undefined;
    localValue: {
        set(value: any): void;
        get(): any;
    };
    isValidSelection(): boolean;
}, {
    select(index: number): Promise<void>;
    setFocus(): void;
    setBlur(): void;
    isObject(obj: any): boolean;
    clearInput(): void;
    keyup(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<string | number | Record<string, any> | null>;
        default: null;
    };
    itemValue: {
        type: StringConstructor;
        default: string;
    };
    itemText: {
        type: StringConstructor;
        default: string;
    };
    returnObject: {
        type: PropType<boolean>;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    items: {
        type: PropType<(string | Record<string, any>)[]>;
        default: () => never[];
    };
    loading: {
        type: PropType<boolean>;
        default: boolean;
    };
    combobox: {
        type: PropType<boolean>;
        default: boolean;
    };
    filter: {
        type: FunctionConstructor;
        default: (item: any) => boolean;
    };
    editable: {
        type: PropType<boolean>;
        default: boolean;
    };
}>>, {
    filter: Function;
    width: string | number;
    items: (string | Record<string, any>)[];
    modelValue: string | number | Record<string, any> | null;
    itemValue: string;
    itemText: string;
    returnObject: boolean;
    placeholder: string;
    loading: boolean;
    combobox: boolean;
    editable: boolean;
}>;
export default _default;
