import { PropType } from "vue";
type Tab = {
    name: string;
    title: string;
};
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<string>;
        default: null;
    };
}, unknown, {
    selectedTab: string;
}, {
    /**
     * This implementation has to do with tabs being dynamically rendered with a for loop.
     * The child is not of type KTabItem if rendered in a loop.  The `.children` lookup
     * takes care of that.
     */
    tabs(): Array<Tab>;
    tabNames(): string[];
}, {
    initialSelectedTab(): string;
    selectTab(tabName: string): void;
    classObj(tab: Tab): {
        "k-tabs-nav-tab": boolean;
        "k-tabs-active": boolean;
    };
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<string>;
        default: null;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string;
}, {}>;
export default _default;
