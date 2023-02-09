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
}, any, any, {
    pageRange(): any;
    pageSizes(): any;
    pageNumber(): any;
    pageSize: {
        get(): any;
        set(value: any): void;
    };
    hasPrevious(): any;
    hasNext(): any;
}, {
    classObj(pageNumber: any): {
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
