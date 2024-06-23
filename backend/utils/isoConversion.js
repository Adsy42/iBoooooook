const moment = require("moment-timezone");

/**
 * Convert local time to ISO string.
 * @param {Date} date - The date object representing local time.
 * @param {string} location - The time zone location (e.g., 'Australia/Melbourne').
 * @returns {string} - The ISO string representation of the date.
 */
function localToISO(date, location) {
  return moment.tz(date, location).toISOString();
}

/**
 * Convert ISO string to local time with minute precision.
 * @param {string} isoString - The ISO string representation of the date.
 * @param {string} location - The time zone location (e.g., 'Australia/Melbourne').
 * @returns {Date} - The date object representing local time with minutes preserved.
 */
function isoToLocal(isoString, location) {
  const localDate = moment.tz(isoString, location).toDate();
  localDate.setSeconds(0, 0); // Set seconds and milliseconds to 0
  return localDate;
}

/**
 * Calculate the start and end of the day two days ahead in the given location.
 * @param {string} location - The time zone location (e.g., 'Australia/Melbourne').
 * @returns {Object} - An object containing ISO strings for the start and end of the day two days ahead.
 */
function getTwoDaysAheadRange(location) {
  const twoDaysAheadStart = moment()
    .tz(location)
    .add(2, "days")
    .startOf("day")
    .toDate();
  const twoDaysAheadEnd = moment()
    .tz(location)
    .add(2, "days")
    .endOf("day")
    .toDate();

  return {
    start: localToISO(twoDaysAheadStart, location),
    end: localToISO(twoDaysAheadEnd, location),
  };
}

module.exports = { localToISO, isoToLocal, getTwoDaysAheadRange };
