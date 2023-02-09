declare const _default: import("vue").DefineComponent<{
    user: {
        type: (ObjectConstructor | NumberConstructor)[];
        default: null;
    };
    userRec: {
        type: ObjectConstructor;
        default: null;
    };
    userid: {
        type: NumberConstructor;
        default: null;
    };
    gif: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    session: {};
}, {
    userRecLocal: null;
}, {
    userIdLocal(): undefined;
    userLocal(): number | Record<string, any>;
    displayName(): undefined;
    type(): undefined;
}, {
    isInteger(value: any): boolean;
    click(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    user: {
        type: (ObjectConstructor | NumberConstructor)[];
        default: null;
    };
    userRec: {
        type: ObjectConstructor;
        default: null;
    };
    userid: {
        type: NumberConstructor;
        default: null;
    };
    gif: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    gif: boolean;
    userRec: Record<string, any>;
    user: number | Record<string, any>;
    userid: number;
}>;
export default _default;
