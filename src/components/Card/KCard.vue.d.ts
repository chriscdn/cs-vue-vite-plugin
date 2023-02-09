declare const _default: import("vue").DefineComponent<{}, {}, {}, {
    classObj(): {
        'k-card': boolean;
        'k-card-clickable': any;
    };
}, {
    renderCard(): import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
}, {
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
} | {
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
