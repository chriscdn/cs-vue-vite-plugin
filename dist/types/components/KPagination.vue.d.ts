declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: NumberConstructor;
        required: true;
    };
    pagination: {
        type: ObjectConstructor;
        required: true;
    };
    length: {
        type: NumberConstructor;
        required: true;
    };
}, unknown, unknown, {
    pageRange(): Array<number | string>;
    pageSizes(): Array<number>;
    pageNumber(): number;
    pageSize: {
        get(): any;
        set(value: number): void;
    };
    hasPrevious(): boolean;
    hasNext(): boolean;
}, {
    classObj(pageNumber: number): {
        'k-pagination-button-selected': boolean;
    };
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "update:pageSize")[], "update:modelValue" | "update:pageSize", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: NumberConstructor;
        required: true;
    };
    pagination: {
        type: ObjectConstructor;
        required: true;
    };
    length: {
        type: NumberConstructor;
        required: true;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onUpdate:pageSize"?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _default;