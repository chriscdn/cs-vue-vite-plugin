/**
 * Taken from https://github.com/robcresswell/vue-material-design-icons
 */
declare const _default: import("vue").DefineComponent<{
    title: {
        type: StringConstructor;
    };
    size: {
        type: NumberConstructor;
        default: number;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    title: {
        type: StringConstructor;
    };
    size: {
        type: NumberConstructor;
        default: number;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    size: number;
}, {}>;
export default _default;
