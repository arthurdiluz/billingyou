import { DateTime } from "luxon";

/**
 *
 * @param date ISO date
 * @param format date format to be converted (default: dd/MM/yyyy)
 * @returns formatted UTC date
 */
function fromIsoToUtc(date: string, format: string = "dd/MM/yyyy"): string {
  return DateTime.fromISO(date).toUTC().toFormat(format);
}

export const DateHelper = {
  fromIsoToUtc,
};
