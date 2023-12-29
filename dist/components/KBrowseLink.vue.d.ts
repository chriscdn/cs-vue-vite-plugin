import { type RHNodeSerializer } from "../types/RHNodeSerializer";
import { type PropType } from "vue";
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
        type: PropType<boolean>;
        default: boolean;
    };
    clickable: {
        type: PropType<boolean>;
        default: boolean;
    };
    legacy: {
        type: PropType<boolean>;
        default: boolean;
    };
    modernMenu: {
        type: PropType<boolean>;
        default: boolean;
    };
}, {
    session: import("@kweli/cs-rest").Session;
}, {
    nodeRecLocal: RHNodeSerializer | null;
    loading: boolean;
}, {
    nodeRecResolved(): RHNodeSerializer | null;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    nodeRec: {
        type: PropType<RHNodeSerializer | null>;
        default: null;
    };
    dataid: {
        type: PropType<number | null>;
        default: null;
    };
    image: {
        type: PropType<boolean>;
        default: boolean;
    };
    clickable: {
        type: PropType<boolean>;
        default: boolean;
    };
    legacy: {
        type: PropType<boolean>;
        default: boolean;
    };
    modernMenu: {
        type: PropType<boolean>;
        default: boolean;
    };
}>>, {
    image: boolean;
    dataid: number | null;
    legacy: boolean;
    nodeRec: RHNodeSerializer | null;
    clickable: boolean;
    modernMenu: boolean;
}, {}>;
export default _default;
