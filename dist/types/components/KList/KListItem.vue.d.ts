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
        "k-list-item-clickable": any;
    };
}, {}, {
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
}, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
