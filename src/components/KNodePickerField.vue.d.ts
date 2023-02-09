declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: NumberConstructor;
        default: null;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    objid: {
        type: NumberConstructor;
        default: null;
    };
    selectPerm: {
        type: NumberConstructor;
        default: number;
    };
    width: {
        type: NumberConstructor;
        default: number;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
    selectScreen: {
        type: ArrayConstructor;
        default: () => never[];
    };
    browseButtonLabel: {
        type: StringConstructor;
        default: string;
    };
    clearable: {
        type: BooleanConstructor;
        defalut: boolean;
    };
    clearButtonLabel: {
        type: StringConstructor;
        default: string;
    };
}, {
    session: {};
    config: {};
}, {
    breadcrumb: never[];
}, {
    dataid: {
        set(value: any): void;
        get(): number;
    };
    uniqueID(): string;
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
        objid: number;
        selectPerm: any;
    };
    url(): string;
    name(): any;
    windowParams(): string;
}, {
    openWindow(): void;
    targetBrowseObjID(): number;
    didCloseWindow(): void;
    callback(dataid: any, breadcrumb: any): void;
    clear(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: NumberConstructor;
        default: null;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    objid: {
        type: NumberConstructor;
        default: null;
    };
    selectPerm: {
        type: NumberConstructor;
        default: number;
    };
    width: {
        type: NumberConstructor;
        default: number;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
    selectScreen: {
        type: ArrayConstructor;
        default: () => never[];
    };
    browseButtonLabel: {
        type: StringConstructor;
        default: string;
    };
    clearable: {
        type: BooleanConstructor;
        defalut: boolean;
    };
    clearButtonLabel: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    title: string;
    height: number;
    width: number;
    modelValue: number;
    objid: number;
    selectPerm: number;
    selectScreen: unknown[];
    browseButtonLabel: string;
    clearable: boolean;
    clearButtonLabel: string;
}>;
export default _default;
