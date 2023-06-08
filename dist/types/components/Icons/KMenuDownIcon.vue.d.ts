/**
 * Taken from https://github.com/robcresswell/vue-material-design-icons
 */
declare const _default: import("vue").DefineComponent<{
    title: {
        type: StringConstructor;
    };
    fillColor: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: NumberConstructor;
        default: number;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    title: {
        type: StringConstructor;
    };
    fillColor: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: NumberConstructor;
        default: number;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    size: number;
    fillColor: string;
}, {}>;
export default _default;
