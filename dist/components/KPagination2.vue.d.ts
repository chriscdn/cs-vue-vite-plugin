import { PropType } from "vue";
import { TPaginationLimitOffset } from "../types";
type TPagination = TPaginationLimitOffset & {
    count: number;
};
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<TPagination>;
        required: true;
    };
}, unknown, {
    pageSizes: number[];
}, {
    pagination(): TPagination;
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
        type: PropType<TPagination>;
        required: true;
    };
}>>, {}, {}>;
export default _default;
