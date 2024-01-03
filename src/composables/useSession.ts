import { inject } from "vue";
import { sessionKey } from "../injection";
import { Session } from "@kweli/cs-rest";

export const useSession = (): Session => {
  const session = inject(sessionKey, null) as Session | null;
  if (!session) {
    throw new Error(
      "Failed to inject session. Make sure @kweli/cs-vue-vite-plugin is set up properly."
    );
  }
  return session;
};
