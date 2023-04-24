/** __vue_virtual_code_placeholder */
/**
 *
 * Example:
 *
 * <KPageDropZone @predrop="predrop" @drop="drop($event)">
 *   <template #default="slotProps">
 *      <v-dialog :value="slotProps.active" fullscreen>
 *        <!-- display a "drop here label" -->
 *      </v-dialog>
 *    </template>
 *  </KPageDropZone>
 */
declare const _default: import("vue").DefineComponent<{
    mimetypes: {
        type: ArrayConstructor;
        default: null;
    };
}, unknown, {
    active: boolean;
    lastTarget: EventTarget | null;
}, {}, {
    isFile(event: DragEvent): boolean;
    dragenter(event: DragEvent): void;
    dragleave(event: DragEvent): void;
    dragover(event: DragEvent): void;
    drop(event: DragEvent): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    mimetypes: {
        type: ArrayConstructor;
        default: null;
    };
}>>, {
    mimetypes: unknown[];
}>;
export default _default;
