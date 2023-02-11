import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    color: {
        type: PropType<string>;
        default: null;
    };
}, unknown, unknown, {
    resolvedColor(): string;
    colorableTextStyle(): {
        color: string;
    };
    colorableBackgroundStyle(): {
        backgroundColor: string;
    };
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: PropType<string>;
        default: null;
    };
}>>, {
    color: string;
}>;
export default _default;
