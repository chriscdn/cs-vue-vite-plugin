import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<number | null>;
        default: null;
    };
    title: {
        type: PropType<string>;
        default: string;
    };
    objid: {
        type: PropType<number>;
        default: null;
    };
    selectPerm: {
        type: PropType<number>;
        default: number;
    };
    width: {
        type: PropType<number>;
        default: number;
    };
    height: {
        type: PropType<number>;
        default: number;
    };
    selectScreen: {
        type: PropType<number[]>;
        default: () => never[];
    };
    browseButtonLabel: {
        type: PropType<string>;
        default: string;
    };
    clearable: {
        type: PropType<boolean>;
        defalut: boolean;
    };
    clearButtonLabel: {
        type: PropType<string>;
        default: string;
    };
}, {
    session: import("@kweli/cs-rest").Session;
    config: import("@/injection").Configuration;
}, {
    breadcrumb: Record<string, any>[];
}, {
    dataid: {
        set(value: number): void;
        get(): number | null;
    };
    uniqueid(): string;
    globalCallbackFunctionName(): string;
    selectScreenString(): {
        selectScreen: string;
    } | null;
    urlParams(): {
        formname: string;
        fieldPrefix: string;
        selectScreen?: string | undefined;
        func: string;
        objAction: string;
        headerLabel: string;
        objid: string;
        selectPerm: string;
    };
    url(): string;
    name(): any;
    windowParams(): string;
}, {
    openWindow(): void;
    targetBrowseObjID(): number;
    didCloseWindow(): void;
    callback(dataid: number): void;
    clear(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<number | null>;
        default: null;
    };
    title: {
        type: PropType<string>;
        default: string;
    };
    objid: {
        type: PropType<number>;
        default: null;
    };
    selectPerm: {
        type: PropType<number>;
        default: number;
    };
    width: {
        type: PropType<number>;
        default: number;
    };
    height: {
        type: PropType<number>;
        default: number;
    };
    selectScreen: {
        type: PropType<number[]>;
        default: () => never[];
    };
    browseButtonLabel: {
        type: PropType<string>;
        default: string;
    };
    clearable: {
        type: PropType<boolean>;
        defalut: boolean;
    };
    clearButtonLabel: {
        type: PropType<string>;
        default: string;
    };
}>>, {
    title: string;
    height: number;
    width: number;
    modelValue: number | null;
    objid: number;
    selectPerm: number;
    selectScreen: number[];
    browseButtonLabel: string;
    clearButtonLabel: string;
}>;
export default _default;
