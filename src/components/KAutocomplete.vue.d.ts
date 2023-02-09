declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (StringConstructor | ObjectConstructor | NumberConstructor)[];
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
        type: BooleanConstructor;
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
        type: ArrayConstructor;
        default: () => never[];
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    combobox: {
        type: BooleanConstructor;
        default: boolean;
    };
    filter: {
        type: FunctionConstructor;
        default: (item: any) => boolean;
    };
    editable: {
        type: BooleanConstructor;
        default: boolean;
    };
}, any, {
    inputText: string;
    currentFocus: number;
    focus: boolean;
}, {
    style(): {
        width: string | number;
    };
    itemsFiltered(): unknown[];
    placeholderText(): string | null;
    localValue: {
        set(value: any): void;
        get(): unknown;
    };
    isValidSelection(): boolean;
}, {
    select(index: any): Promise<void>;
    setFocus(): void;
    setBlur(): void;
    isObject(obj: any): boolean;
    clearInput(_event: any): void;
    keyup(_event: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | ObjectConstructor | NumberConstructor)[];
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
        type: BooleanConstructor;
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
        type: ArrayConstructor;
        default: () => never[];
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    combobox: {
        type: BooleanConstructor;
        default: boolean;
    };
    filter: {
        type: FunctionConstructor;
        default: (item: any) => boolean;
    };
    editable: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    filter: Function;
    width: string | number;
    items: unknown[];
    modelValue: string | number | Record<string, any>;
    itemValue: string;
    itemText: string;
    returnObject: boolean;
    placeholder: string;
    loading: boolean;
    combobox: boolean;
    editable: boolean;
}>;
export default _default;
