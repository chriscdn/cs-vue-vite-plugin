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
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    to: string | Record<string, any>;
    nuxt: boolean;
}, {}>;
export default _default;
