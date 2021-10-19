# KAutocomplete

## Props

<!-- @vuese:KAutocomplete:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|modelValue|-|`String` /  `Object` /  `Number`|`false`|null|
|itemValue|-|`String`|`false`|value|
|itemText|-|`String`|`false`|text|
|returnObject|-|`Boolean`|`false`|false|
|placeholder|-|`String`|`false`|Start typing...|
|width|readonly: { type: Boolean, default: false },|`String` /  `Number`|`false`|100%|
|items|-|`Array`|`false`|[]|
|loading|-|`Boolean`|`false`|false|
|combobox|-|`Boolean`|`false`|false|
|filter|-|`Function`|`false`|item => !!item|
|editable|-|`Boolean`|`false`|true|

<!-- @vuese:KAutocomplete:props:end -->


## Slots

<!-- @vuese:KAutocomplete:slots:start -->
|Name|Description|Default Slot Content|
|---|---|---|
|prepend|-|-|
|item|-|-|

<!-- @vuese:KAutocomplete:slots:end -->


