# KPageDropZone

Example: <KPageDropZone @predrop="predrop" @drop="drop($event)"> <template #default="slotProps"> <v-dialog :value="slotProps.active" fullscreen> <!-- display a "drop here label" --> </v-dialog> </template> </KPageDropZone>

## Props

<!-- @vuese:KPageDropZone:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|mimetypes|-|`Array`|`false`|null|

<!-- @vuese:KPageDropZone:props:end -->


## Events

<!-- @vuese:KPageDropZone:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|predrop|-|-|
|drop|-|-|

<!-- @vuese:KPageDropZone:events:end -->


## Slots

<!-- @vuese:KPageDropZone:slots:start -->
|Name|Description|Default Slot Content|
|---|---|---|
|default|-|-|

<!-- @vuese:KPageDropZone:slots:end -->


