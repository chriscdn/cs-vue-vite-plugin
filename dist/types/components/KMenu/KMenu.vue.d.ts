import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    submenu: {
        type: PropType<boolean>;
        default: boolean;
    };
}, {
    menuButton: import("vue").Ref<any>;
}, {
    visible: boolean;
    left: number;
    top: number;
    height: number;
    width: number;
}, {
    styleDropDownItems(): {
        left: string | undefined;
        top: string | undefined;
    };
    dropDownMenuItemsClassObj(): {
        hidden: boolean;
    };
}, {
    clickAway(): void;
    updatePosition(): void;
    showMenu(visibility: boolean): void;
    toggleMenu(): void;
    mouseEnter(): void;
    mouseLeave(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    submenu: {
        type: PropType<boolean>;
        default: boolean;
    };
}>>, {
    submenu: boolean;
}, {}>;
export default _default;
