import { PropType } from 'vue';
declare global {
    interface Window {
        baseUrl?: Function;
        baseURL?: Function;
        doUserDialog?: Function;
    }
}
export type UserRecType = {
    name: string;
    id: number;
    type: number;
};
declare const _default: import("vue").DefineComponent<{
    user: {
        type: PropType<number | Record<string, any> | null>;
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
    session: import("@kweli/cs-rest").Session;
}, {
    userRecLocal: UserRecType | null;
}, {
    userIdLocal(): number | undefined;
    userLocal(): number | Record<string, any>;
    displayName(): string | undefined;
    type(): number | undefined;
}, {
    isInteger(value: any): boolean;
    click(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    user: {
        type: PropType<number | Record<string, any> | null>;
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
    user: number | Record<string, any> | null;
    userRec: Record<string, any>;
    userid: number;
}>;
export default _default;
