import { PropType } from "vue";
import { PaginatorSerializer } from "../types/PaginatorSerializer";
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: NumberConstructor;
        required: true;
    };
    pagination: {
        type: PropType<PaginatorSerializer>;
        required: true;
    };
}, unknown, unknown, {
    potentiallyMultiplePages(): boolean;
    pageRange(): Array<number | string>;
    pageSizes(): Array<number>;
    pageNumber(): number;
    pageSize: {
        get(): number;
        set(value: number): void;
    };
    hasPrevious(): boolean;
    hasNext(): boolean;
}, {
    classObj(pageNumber: number): {
        "k-pagination-button-selected": boolean;
    };
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "update:pageSize")[], "update:modelValue" | "update:pageSize", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: NumberConstructor;
        required: true;
    };
    pagination: {
        type: PropType<PaginatorSerializer>;
        required: true;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onUpdate:pageSize"?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _default;
