declare const _default: import("vue").DefineComponent<{}, {}, {}, {
    classObj(): {
        'k-card': boolean;
        'k-card-clickable': any;
    };
}, {
    renderCard(): import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
}, import("vue").DefineComponent<{
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
}, unknown, unknown, {
    measurableStyles(): import("vue").CSSProperties;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
}>>, {
    height: string | number;
    maxHeight: string | number;
    maxWidth: string | number;
    minHeight: string | number;
    minWidth: string | number;
    width: string | number;
}> | {
    props: {
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        link: {
            type: BooleanConstructor;
            default: boolean;
        };
        target: {
            type: StringConstructor;
            default: string;
        };
        nuxt: {
            type: BooleanConstructor;
            default: boolean;
        };
        to: {
            type: (StringConstructor | ObjectConstructor)[];
            default: null;
        };
        href: {
            type: StringConstructor;
            default: null;
        };
    };
    computed: {
        isClickable(): any;
    };
    methods: {
        click(e: any): void;
        generateRouteLink(): {
            tag: string;
            data: {};
        };
    };
}, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _default;
