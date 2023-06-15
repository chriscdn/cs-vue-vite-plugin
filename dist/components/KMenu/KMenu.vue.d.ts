import { PropType, Ref } from "vue";
type TSize = {
    width: number;
    height: number;
};
type TBox = TSize & {
    top: number;
    left: number;
    topRelativeToViewport: number;
    leftRelativeToViewport: number;
};
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<boolean | null>;
        default: null;
    };
    submenu: {
        type: PropType<boolean>;
        default: boolean;
    };
    loading: {
        type: PropType<boolean>;
        default: boolean;
    };
}, {
    menuItems: Ref<HTMLDivElement | null>;
    menuActivator: Ref<HTMLDivElement | null>;
}, {
    visibleLocal: boolean;
    activatorBox: TBox;
    menuItemsSize: TSize;
}, {
    visible: {
        get(): boolean;
        set(value: boolean): void;
    };
    styleDropDownItems(): {
        top: string | undefined;
        left: string | undefined;
    };
    dropDownMenuItemsClassObj(): {
        hidden: boolean;
    };
}, {
    clickAway(): void;
    updatePosition(): Promise<void>;
    showMenu(visibility: boolean): void;
    toggleMenu(): void;
    mouseEnter(): void;
    mouseLeave(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<boolean | null>;
        default: null;
    };
    submenu: {
        type: PropType<boolean>;
        default: boolean;
    };
    loading: {
        type: PropType<boolean>;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: boolean | null;
    loading: boolean;
    submenu: boolean;
}, {}>;
export default _default;
