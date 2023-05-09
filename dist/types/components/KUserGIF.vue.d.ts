import { PropType } from "vue";
import { RHUserSerializer } from "@/types/RHUserSerializer";
declare const _default: import("vue").DefineComponent<{
    userRec: {
        type: PropType<RHUserSerializer>;
        default: null;
    };
    type: {
        type: NumberConstructor;
        default: number;
    };
    height: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    width: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}, {
    config: import("@/injection").Configuration;
    session: import("@kweli/cs-rest").Session;
}, unknown, {
    userType(): number;
    url(): string | null;
}, {}, import("vue").DefineComponent<{
    height: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
    maxHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
    maxWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
    minHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
    minWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
    width: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
}, unknown, unknown, {
    measurableStyles(): import("vue").CSSProperties;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    height: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
    maxHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
    maxWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
    minHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
    minWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
    width: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
}>>, {
    height: string | number;
    maxHeight: string | number;
    maxWidth: string | number;
    minHeight: string | number;
    minWidth: string | number;
    width: string | number;
}>, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    userRec: {
        type: PropType<RHUserSerializer>;
        default: null;
    };
    type: {
        type: NumberConstructor;
        default: number;
    };
    height: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    width: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}>>, {
    height: string | number;
    width: string | number;
    type: number;
    userRec: RHUserSerializer;
}>;
export default _default;
