import { dateTimeFormatterKey, injectStrict } from "../injection";

export const useDateTimeFormatter = () => injectStrict(dateTimeFormatterKey);
