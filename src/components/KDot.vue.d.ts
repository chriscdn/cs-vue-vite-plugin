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
}, any, any, {
    style(): {
        borderStyle: string;
        borderWidth: string | undefined;
        borderColor: any;
        width: string | undefined;
        height: string | undefined;
        backgroundColor?: undefined;
    } | {
        width: string | undefined;
        height: string | undefined;
        backgroundColor: any;
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
    outline: boolean;
    size: string | number;
}>;
export default _default;
