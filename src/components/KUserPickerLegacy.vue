<script lang="ts">
import { injectStrict, sessionKey } from "@/injection";
import { KUserPicker } from ".";
import { defineComponent } from "vue";
import get from "lodash.get";
export default defineComponent({
  extends: KUserPicker,
  setup() {
    return { session: injectStrict(sessionKey) };
  },
  methods: {
    async loadInitialValue() {
      const initialValue = this.modelValue;

      if (initialValue) {
        try {
          this.pleaseWait = true;
          this.readonly = true;
          this.loading = true;

          const response = await this.session.members.member(
            initialValue,
            "v1"
          );

          const firstName = get(response, "data.data.first_name");
          const lastName = get(response, "data.data.last_name");
          const name = get(response, "data.data.name");

          const text = `${firstName} ${lastName} (${name})`;

          this.items = [
            {
              text,
              value: get(response, "data.data.id"),
              type: get(response, "data.data.type"),
            },
          ];

          this.select = text;
        } finally {
          this.pleaseWait = false;
          this.readonly = false;
          this.loading = false;
        }
      }
    },
  },
});
</script>
