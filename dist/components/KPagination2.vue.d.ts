import { PropType } from "vue";
export type TPaginiation = {
    offset: number;
    limit: number;
    count: number;
};
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<TPaginiation>;
        required: true;
    };
}, unknown, {
    pageSizes: number[];
}, {
    pagination(): TPaginiation;
    pageSize: {
        get(): number;
        set(value: number): void;
    };
    offset(): number;
    limit(): number;
    count(): number;
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
        type: PropType<TPaginiation>;
        required: true;
    };
}>>, {}, {}>;
export default _default;
