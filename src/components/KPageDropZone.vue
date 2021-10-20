<template>
    <div>
        <slot :active="active"></slot>
    </div>
</template>

<script>
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
export default {
    props: {
        mimetypes: {
            type: Array,
            default: null,
        },
    },
    data() {
        return {
            active: false,
            lastTarget: null,
        }
    },
    mounted() {
        window.addEventListener('dragenter', this.dragenter)
        window.addEventListener('dragleave', this.dragleave)
        window.addEventListener('dragover', this.dragover)
        window.addEventListener('drop', this.drop)
    },
    beforeUnmount() {
        window.removeEventListener('dragenter', this.dragenter)
        window.removeEventListener('dragleave', this.dragleave)
        window.removeEventListener('dragover', this.dragover)
        window.removeEventListener('drop', this.drop)
    },
    methods: {
        isFile(event) {
            return event.dataTransfer.types.some((item) => item === 'Files')
        },
        dragenter(event) {
            if (this.isFile(event)) {
                this.lastTarget = event.target
                this.active = true
            }
        },
        dragleave(event) {
            event.preventDefault()

            if (event.target === this.lastTarget || event.target === window.document) {
                this.active = false
            }
        },
        dragover(event) {
            event.preventDefault()
        },
        drop(event) {
            event.preventDefault()

            if (event.dataTransfer && event.dataTransfer.files.length) {
                this.$emit('predrop')

                let files = Array.from(event.dataTransfer.files)

                if (this.mimetypes) {
                    files = files.filter((file) => this.mimetypes.includes(file.type))
                }

                this.$emit('drop', files)
            }

            this.active = false
        },
    },
}
</script>
