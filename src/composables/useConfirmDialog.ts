import { injectStrict, confirmDialogKey } from "../injection";

export const useConfirmDialog = () => injectStrict(confirmDialogKey);
