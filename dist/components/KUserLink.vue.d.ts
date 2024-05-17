import { PropType } from "vue";
import { type RHUserSerializer } from "../types/RHUserSerializer";
declare global {
    interface Window {
        baseUrl?: Function;
        baseURL?: Function;
        doUserDialog?: Function;
    }
}
declare const _default: import("vue").DefineComponent<{
    user: {
        type: PropType<number | RHUserSerializer | null>;
        default: null;
    };
    gif: {
        type: BooleanConstructor;
        default: boolean;
    };
    legacy: {
        type: PropType<boolean>;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    user: {
        type: PropType<number | RHUserSerializer | null>;
        default: null;
    };
    gif: {
        type: BooleanConstructor;
        default: boolean;
    };
    legacy: {
        type: PropType<boolean>;
        default: boolean;
    };
}>>, {
    legacy: boolean;
    user: number | RHUserSerializer | null;
    gif: boolean;
}, {}>;
export default _default;
