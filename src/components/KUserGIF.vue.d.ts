declare const _default: import("vue").DefineComponent<{
    userRec: {
        type: ObjectConstructor;
        default: null;
    };
    type: {
        type: NumberConstructor;
        default: number;
    };
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
}, {
    config: any;
}, any, {
    userType(): any;
    url(): string | null;
}, {}, {
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
    userRec: {
        type: ObjectConstructor;
        default: null;
    };
    type: {
        type: NumberConstructor;
        default: number;
    };
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
}>>, {
    type: number;
    height: string | number;
    width: string | number;
    userRec: Record<string, any>;
}>;
export default _default;
