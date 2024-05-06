declare const _default: import("vue").DefineComponent<{}, {
    session: import("@kweli/cs-rest").Session;
}, {}, {}, {
    loadInitialValue(): Promise<void>;
}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<{
    modelValue: {
        type: import("vue").PropType<number | null>;
        default: null;
    };
    users: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    groups: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    returnObject: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    editable: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    legacy: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}, {
    session: import("@kweli/cs-rest").Session;
}, {
    loading: boolean;
    readonly: boolean;
    pleaseWait: boolean;
    searchText: null;
    items: {
        text: string;
        type: number;
        value: number;
    }[];
    select: any;
}, {
    USER(): number;
    GROUP(): number;
    valueLocal: {
        set(value: number): void;
        get(): number | null;
    };
    options(): {
        where_type: number | null;
    };
    placeholder(): "" | "Loading..." | "Search for user or group..." | "Search for user..." | "Search for group...";
}, {
    querySelections(v: string): Promise<void>;
    loadInitialValue(): Promise<void>;
}, import("vue").DefineComponent<{
    label: {
        type: StringConstructor;
        default: null;
    };
    successMessages: {
        type: ArrayConstructor;
        default: () => never[];
    };
    errorMessages: {
        type: ArrayConstructor;
        default: () => never[];
    };
}, unknown, unknown, {
    hasSuccess(): boolean;
    hasError(): boolean;
    classObj(): {
        "k-input": boolean;
        "k-input--success": boolean;
        "k-input--error": boolean;
    };
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: StringConstructor;
        default: null;
    };
    successMessages: {
        type: ArrayConstructor;
        default: () => never[];
    };
    errorMessages: {
        type: ArrayConstructor;
        default: () => never[];
    };
}>>, {
    label: string;
    successMessages: unknown[];
    errorMessages: unknown[];
}, {}>, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<number | null>;
        default: null;
    };
    users: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    groups: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    returnObject: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    editable: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    legacy: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: number | null;
    width: string | number;
    users: boolean;
    groups: boolean;
    returnObject: boolean;
    editable: boolean;
    legacy: boolean;
}, {}>, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>;
export default _default;
