import { injectStrict, configKey } from "../injection";

export const useConfig = () => injectStrict(configKey);
