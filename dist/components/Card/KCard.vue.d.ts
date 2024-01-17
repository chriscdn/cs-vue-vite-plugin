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
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
    maxHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
    maxWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
    minHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
    minWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
    width: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
}, unknown, unknown, {
    measurableStyles(): import("vue").CSSProperties;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    height: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
    maxHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
    maxWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
    minHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
    minWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
    width: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
}>>, {
    height: string | number;
    maxHeight: string | number;
    maxWidth: string | number;
    minHeight: string | number;
    minWidth: string | number;
    width: string | number;
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
        type: (ObjectConstructor | StringConstructor)[];
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
        type: (ObjectConstructor | StringConstructor)[];
        default: null;
    };
    href: {
        type: StringConstructor;
        default: null;
    };
}>>, {
    link: boolean;
    to: string | Record<string, any>;
    target: string;
    disabled: boolean;
    href: string;
    nuxt: boolean;
}, {}>, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>;
export default _default;
