declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: ObjectConstructor;
        required: true;
    };
}, unknown, {
    pageSizes: number[];
}, {
    pageSize: {
        get(): any;
        set(value: number): void;
    };
    pagination(): Record<string, any>;
    offset(): any;
    limit(): any;
    count(): any;
    lastPageNumber0(): number;
    lastPageNumber(): number;
    pageCount(): number;
    pageRange0(): number[];
    pageNumber0(): number;
    pageNumber(): number;
    hasPrevious(): boolean;
    hasNext(): boolean;
}, {
    classObj(pageNumber: number): {
        "k-pagination2-button-selected": boolean;
    };
    clickedPageNumber(pageNumber0: number): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: ObjectConstructor;
        required: true;
    };
}>>, {}, {}>;
export default _default;
