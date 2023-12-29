import { injectStrict, snackbarKey } from "../injection";

export const useSnackbar = () => injectStrict(snackbarKey);
