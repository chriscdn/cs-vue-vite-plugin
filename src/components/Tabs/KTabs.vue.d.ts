declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: StringConstructor;
        default: null;
    };
}, any, {
    selectedTab: string;
}, {
    tabs(): import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    tabNames(): any[];
}, {
    initialSelectedTab(): any;
    selectTab(tabName: any): void;
    classObj(tab: any): {
        'k-tabs-nav-tab': boolean;
        'k-tabs-active': boolean;
    };
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        default: null;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string;
}>;
export default _default;
