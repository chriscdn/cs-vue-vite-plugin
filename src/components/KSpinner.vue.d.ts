declare const _default: import("vue").DefineComponent<{
    color: {
        type: StringConstructor;
        default: string;
    };
    maxHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    maxWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
}, any, any, {}, {}, {
    props: {
        height: {
            type: (StringConstructor | NumberConstructor)[];
            default: null;
        };
        maxHeight: {
            type: (StringConstructor | NumberConstructor)[];
            default: null;
        };
        maxWidth: {
            type: (StringConstructor | NumberConstructor)[];
            default: null;
        };
        minHeight: {
            type: (StringConstructor | NumberConstructor)[];
            default: null;
        };
        minWidth: {
            type: (StringConstructor | NumberConstructor)[];
            default: null;
        };
        width: {
            type: (StringConstructor | NumberConstructor)[];
            default: null;
        };
    };
    computed: {
        measurableStyles(): {
            height: string;
            minHeight: string;
            minWidth: string;
            maxHeight: string;
            maxWidth: string;
            width: string;
        };
    };
}, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: StringConstructor;
        default: string;
    };
    maxHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    maxWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
}>>, {
    color: string;
    maxHeight: string | number;
    maxWidth: string | number;
}>;
export default _default;
