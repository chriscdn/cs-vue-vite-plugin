declare const _default: import("vue").DefineComponent<{}, {}, {}, {
    classObj(): {
        "k-card": boolean;
        "k-card-clickable": boolean;
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
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
    width: string | number;
    height: string | number;
    maxHeight: string | number;
    minHeight: string | number;
    maxWidth: string | number;
    minWidth: string | number;
}, {}> | import("vue").DefineComponent<{
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
}, unknown, unknown, {
    isClickable(): boolean;
}, {
    click(e: Event): void;
    generateRouteLink(): {
        tag: string;
        data: {};
    };
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
}>>, {
    link: boolean;
    disabled: boolean;
    href: string;
    target: string;
    nuxt: boolean;
    to: string | Record<string, any>;
}, {}>, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>;
export default _default;
