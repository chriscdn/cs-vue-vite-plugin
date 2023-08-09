type TAction = {
    name: string;
    url: string;
    children: TAction[];
    signature: string;
};
import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    dataid: {
        type: PropType<number>;
        required: true;
    };
    size: {
        type: PropType<number>;
        default: number;
    };
}, {
    configuration: import("../injection").Configuration;
}, {
    visible: boolean;
    loading: Boolean;
}, {
    actions(): TAction[];
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    dataid: {
        type: PropType<number>;
        required: true;
    };
    size: {
        type: PropType<number>;
        default: number;
    };
}>>, {
    size: number;
}, {}>;
export default _default;
