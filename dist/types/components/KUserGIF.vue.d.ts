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
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
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
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    maxHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    maxWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    minHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    minWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
}, unknown, unknown, {
    measurableStyles(): import("vue").CSSProperties;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    maxHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    maxWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    minHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    minWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
}>>, {
    height: string | number;
    maxHeight: string | number;
    minHeight: string | number;
    width: string | number;
    maxWidth: string | number;
    minWidth: string | number;
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
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
}>>, {
    type: number;
    height: string | number;
    width: string | number;
    userRec: RHUserSerializer;
}>;
export default _default;
