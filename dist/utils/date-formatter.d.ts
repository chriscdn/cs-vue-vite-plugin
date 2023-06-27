export declare class DateTimeFormatter {
    private jsLongDateFormat;
    private jsShortDateFormat;
    constructor(jsLongDateFormat: string, jsShortDateFormat: string);
    /**
     * This gets interpretted as epoch:
     *
     * new Date('1970-01-01') new Date('1970-01-01T00:00:00Z') // notice the Z
     *
     * However, this is parsed into the local time zone, and will be off by an
     * hour in Switzerland.
     *
     * new Date('1970-01-01T00:00:00')
     */
    /**
     * This might seem weird, because it is.  The new Date(<string>) method may or
     * may not parse in the local time zone depending on the construct of the
     * string.  Here we normalize the most common cases to parse as UTC such that
     * we can format in UTC.
     *
     * @param input
     * @returns {Date}
     */
    private stringToDate;
    /**
     * @param input A string, number, or Date.
     * @returns
     */
    private convertToDate;
    formatDate(input: any): string | null;
    formatDateTime(input: any): string | null;
}
