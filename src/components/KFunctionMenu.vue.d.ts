declare const _default: import("vue").DefineComponent<{
    dataid: {
        type: NumberConstructor;
        required: true;
    };
    func: {
        type: StringConstructor;
        default: string;
    };
}, {
    config: {};
}, {
    image: string;
}, {
    uniqueid(): string;
    isModernFunctionMenu(): boolean;
    aid(): string | null;
    xid(): string;
    zid(): string;
}, {
    onclick(event: any): false;
    onmouseover(): void;
    onmouseout(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    dataid: {
        type: NumberConstructor;
        required: true;
    };
    func: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    func: string;
}>;
export default _default;
