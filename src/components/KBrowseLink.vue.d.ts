import { type PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    nodeRec: {
        type: PropType<Record<string, any> | null>;
        default: null;
    };
    dataid: {
        type: PropType<number | null>;
        default: null;
    };
    image: {
        type: PropType<boolean | null>;
        default: boolean;
    };
    clickable: {
        type: PropType<boolean | null>;
        default: boolean;
    };
}, {
    session: {};
}, {
    nodeRecLocal: null;
}, {
    nodeRecResolved(): Record<string, any> | null;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    nodeRec: {
        type: PropType<Record<string, any> | null>;
        default: null;
    };
    dataid: {
        type: PropType<number | null>;
        default: null;
    };
    image: {
        type: PropType<boolean | null>;
        default: boolean;
    };
    clickable: {
        type: PropType<boolean | null>;
        default: boolean;
    };
}>>, {
    image: boolean | null;
    dataid: number | null;
    nodeRec: Record<string, any> | null;
    clickable: boolean | null;
}>;
export default _default;
