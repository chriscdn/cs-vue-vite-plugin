import intlDateFormat from "intl-dateformat";

export class DateTimeFormatter {
  constructor(
    private jsLongDateFormat: string,
    private jsShortDateFormat: string,
  ) {}

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
  private stringToDate(input: string): Date {
    switch (input.length) {
      case 10: // 1970-01-01 - parsed as UTC
        return new Date(input);
      case 19: // 1970-01-01T00:00:00 - append a Z and try again
        return this.stringToDate(`${input}Z`);
      case 20: // 1970-01-01T00:00:00Z - parsed as UTC
        return new Date(input);
      default:
        return new Date(input);
    }
  }

  /**
   * @param input A string, number, or Date.
   * @returns
   */
  private convertToDate(input: any): [Date | null, string | undefined] {
    if (typeof input === "string") {
      return [this.stringToDate(input), "GMT"];
    } else if (typeof input === "number") {
      return [new Date(input), "GMT"];
    } else if (input?.getMonth) {
      return [input, undefined];
    } else {
      return [null, undefined];
    }
  }

  formatDate(input: any): string | null {
    try {
      const [d, timezone] = this.convertToDate(input);

      return d
        ? intlDateFormat(d, this.jsShortDateFormat, {
          timezone,
        })
        : null;
    } catch (e) {
      return null;
    }
  }

  formatDateTime(input: any): string | null {
    try {
      const [d, timezone] = this.convertToDate(input);

      return d
        ? intlDateFormat(d, this.jsLongDateFormat, {
          timezone,
        })
        : null;
    } catch (e) {
      return null;
    }
  }
}
