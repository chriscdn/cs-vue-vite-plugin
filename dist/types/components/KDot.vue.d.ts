declare const _default: import("vue").DefineComponent<{
    color: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    outline: {
        type: BooleanConstructor;
        default: boolean;
    };
    outlineWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
}, unknown, unknown, {
    style(): {
        borderStyle: string;
        borderWidth: string | undefined;
        borderColor: string;
        width: string | undefined;
        height: string | undefined;
        backgroundColor?: undefined;
    } | {
        width: string | undefined;
        height: string | undefined;
        backgroundColor: string;
        borderStyle?: undefined;
        borderWidth?: undefined;
        borderColor?: undefined;
    };
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    outline: {
        type: BooleanConstructor;
        default: boolean;
    };
    outlineWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
}>>, {
    color: string;
    outlineWidth: string | number;
    size: string | number;
    outline: boolean;
}>;
export default _default;
