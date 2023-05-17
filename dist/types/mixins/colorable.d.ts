import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    color: {
        type: PropType<string>;
        default: null;
    };
    textColor: {
        type: PropType<string>;
        default: null;
    };
}, unknown, unknown, {
    resolvedColor(): string;
    resolvedTextColor(): string;
    colorableTextStyle(): {
        color: string;
    };
    colorableTextStyleForBackground(): {
        color: string;
    };
    colorableBackgroundStyle(): {
        backgroundColor: string;
    };
}, {
    resolveColor(txt: string): string;
    fontColorForBackgroundColor(backgroundColor: string): "#000" | "#fff";
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: PropType<string>;
        default: null;
    };
    textColor: {
        type: PropType<string>;
        default: null;
    };
}>>, {
    color: string;
    textColor: string;
}, {}>;
export default _default;
