/** __vue_virtual_code_placeholder */
import { type RHNodeSerializer } from '@/types/RHNodeSerializer';
import { type PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    nodeRec: {
        type: PropType<RHNodeSerializer | null>;
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
    session: import("@kweli/cs-rest").Session;
}, {
    nodeRecLocal: RHNodeSerializer | null;
}, {
    nodeRecResolved(): RHNodeSerializer | null;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    nodeRec: {
        type: PropType<RHNodeSerializer | null>;
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
    nodeRec: RHNodeSerializer | null;
    clickable: boolean | null;
}>;
export default _default;
