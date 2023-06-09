import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    title: {
        type: PropType<string | null>;
        default: null;
    };
    subtitle: {
        type: PropType<string | null>;
        default: null;
    };
}, unknown, unknown, {
    classObj(): {
        "k-list-item": boolean;
        "k-list-item-clickable": boolean;
    };
}, {}, import("vue").DefineComponent<{
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
}, {}>, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    title: {
        type: PropType<string | null>;
        default: null;
    };
    subtitle: {
        type: PropType<string | null>;
        default: null;
    };
}>>, {
    title: string | null;
    subtitle: string | null;
}, {}>;
export default _default;
