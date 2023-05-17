declare global {
    interface Window {
        functionMenuExpansionStatus?: any;
        setSectionName?: Function;
        showFunctionMenu2: Function;
    }
}
/**
 * Creates a Content Server function menu.
 *
 * ```
 * <KFunctionMenu :dataid="2000" />
 * ```
 */
import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    dataid: {
        type: PropType<number>;
        required: true;
    };
    func: {
        type: PropType<string>;
        default: string;
    };
}, {
    config: import("@/injection").Configuration;
}, {
    image: string;
}, {
    uniqueid(): string;
    isModernFunctionMenu(): boolean;
    aid(): string | undefined;
    xid(): string;
    zid(): string;
}, {
    onclick(event: Event): false;
    onmouseover(): void;
    onmouseout(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    dataid: {
        type: PropType<number>;
        required: true;
    };
    func: {
        type: PropType<string>;
        default: string;
    };
}>>, {
    func: string;
}, {}>;
export default _default;
