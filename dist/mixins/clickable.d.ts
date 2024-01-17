declare const _default: import("vue").DefineComponent<{
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
}, {}>;
export default _default;
