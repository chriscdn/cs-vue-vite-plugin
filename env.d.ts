/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line
  const component: DefineComponent<{}, {}, any>
  export default component
}

/**
 * This file was auto generated.  But seems silly it needs to be located
 * within this module and not in @kweli/cs-vue-vite-plugin/dist/types/components/.
 *
 * How to resolve this?  See `README-TS-NOTES.md` in cs-vue-vite-plugin.
 */
import type {
  KAdminLink,
  KAlert,
  KApp,
  KAutocomplete,
  KBrowseLink,
  KButton,
  KCard,
  KCardActions,
  KCardText,
  KCardTitle,
  KConfirm,
  KDateTimePicker,
  KDialog,
  KDot,
  KFormFieldWrapper,
  KFunctionMenu,
  KLinearProgressIndicator,
  KMulti,
  KMulti2,
  KNodeAncestor,
  KNodePickerField,
  KOneMoment,
  KPageDropZone,
  KPageTitle,
  KPagination,
  KPagination2,
  KRadioGroup,
  KScratch,
  KSelect,
  KSnackbar,
  KSortHeader,
  KSpacer,
  KSpinner,
  KSwitch,
  KTabItem,
  KTable,
  KTabs,
  KTextArea,
  KTextField,
  KUserGIF,
  KUserLink,
  KUserPicker,
} from './src/components/index'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    KCard: typeof KCard
    KCardActions: typeof KCardActions
    KCardText: typeof KCardText
    KCardTitle: typeof KCardTitle
    KAdminLink: typeof KAdminLink
    KAlert: typeof KAlert
    KApp: typeof KApp
    KAutocomplete: typeof KAutocomplete
    KBrowseLink: typeof KBrowseLink
    KButton: typeof KButton
    KConfirm: typeof KConfirm
    KDateTimePicker: typeof KDateTimePicker
    KDialog: typeof KDialog
    KDot: typeof KDot
    KFormFieldWrapper: typeof KFormFieldWrapper
    KFunctionMenu: typeof KFunctionMenu
    KLinearProgressIndicator: typeof KLinearProgressIndicator
    KMulti: typeof KMulti
    KMulti2: typeof KMulti2
    KNodeAncestor: typeof KNodeAncestor
    KNodePickerField: typeof KNodePickerField
    KOneMoment: typeof KOneMoment
    KPageDropZone: typeof KPageDropZone
    KPageTitle: typeof KPageTitle
    KPagination: typeof KPagination
    KPagination2: typeof KPagination2
    KRadioGroup: typeof KRadioGroup
    KScratch: typeof KScratch
    KSelect: typeof KSelect
    KSnackbar: typeof KSnackbar
    KSortHeader: typeof KSortHeader
    KSpacer: typeof KSpacer
    KSpinner: typeof KSpinner
    KSwitch: typeof KSwitch
    KTable: typeof KTable
    KTextArea: typeof KTextArea
    KTextField: typeof KTextField
    KUserGIF: typeof KUserGIF
    KUserLink: typeof KUserLink
    KUserPicker: typeof KUserPicker
    KTabItem: typeof KTabItem
    KTabs: typeof KTabs
  }
}

export {}
