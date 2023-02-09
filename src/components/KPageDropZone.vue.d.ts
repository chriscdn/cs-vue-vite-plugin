declare const _default: import("vue").DefineComponent<{
    mimetypes: {
        type: ArrayConstructor;
        default: null;
    };
}, any, {
    active: boolean;
    lastTarget: null;
}, {}, {
    isFile(event: any): any;
    dragenter(event: any): void;
    dragleave(event: any): void;
    dragover(event: any): void;
    drop(event: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    mimetypes: {
        type: ArrayConstructor;
        default: null;
    };
}>>, {
    mimetypes: unknown[];
}>;
export default _default;
