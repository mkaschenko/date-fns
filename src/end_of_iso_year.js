var getISOYear = require('./get_iso_year')
var startOfISOWeek = require('./start_of_iso_week')

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the end of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the end of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} end of an ISO year
 */
var endOfISOYear = function(dirtyDate) {
  var year = getISOYear(dirtyDate)
  var date = startOfISOWeek(new Date(year + 1, 0, 4))
  date.setMilliseconds(date.getMilliseconds() - 1)
  return date
}

module.exports = endOfISOYear

