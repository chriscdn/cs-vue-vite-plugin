declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (StringConstructor | ObjectConstructor | NumberConstructor)[];
        default: null;
    };
    users: {
        type: BooleanConstructor;
        default: boolean;
    };
    groups: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    returnObject: {
        type: BooleanConstructor;
        default: boolean;
    };
    editable: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    session: {};
}, {
    loading: boolean;
    searchText: null;
    readonly: boolean;
    pleaseWait: boolean;
    items: never[];
}, {
    USER(): any;
    GROUP(): any;
    valueLocal: {
        /**
         * @param {number} value
         */
        set(value: number): void;
        get(): string | number | Record<string, any>;
    };
    options(): {
        where_type: any;
    };
    placeholder(): "" | "Loading..." | "Search for user or group..." | "Search for user..." | "Search for group...";
}, {
    querySelections: any;
    formatChoice(item: any): any;
    loadInitialValue(): Promise<void>;
}, {
    props: {
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
    };
    computed: {
        hasSuccess(): any;
        hasError(): any;
        classObj(): {
            'k-input': boolean;
            'k-input--success': boolean;
            'k-input--error': () => any;
        };
    };
}, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | ObjectConstructor | NumberConstructor)[];
        default: null;
    };
    users: {
        type: BooleanConstructor;
        default: boolean;
    };
    groups: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    returnObject: {
        type: BooleanConstructor;
        default: boolean;
    };
    editable: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    width: string | number;
    modelValue: string | number | Record<string, any>;
    returnObject: boolean;
    editable: boolean;
    users: boolean;
    groups: boolean;
}>;
export default _default;
