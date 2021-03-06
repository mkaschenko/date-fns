var parse = require('./parse')

/**
 * @category Day Helpers
 * @summary Return the array of dates within the specified range.
 *
 * @description
 * Return the array of dates within the specified range.
 *
 * @param {Date|String|Number} startDate - the start of range
 * @param {Date|String|Number} endDate - the end of range
 * @returns {Date[]} array of dates for every day of the range
 * @throws End of range must have time value greater than time value of start of range
 */
var eachDay = function(dirtyStartDate, dirtyEndDate) {
  var startDate = parse(dirtyStartDate)
  var endDate = parse(dirtyEndDate)

  var endTime = endDate.getTime()

  if (startDate.getTime() > endTime) {
    throw new Error('End of range must have time value greater than time value of start of range')
  }

  var dates = []

  var currentDate = startDate
  currentDate.setHours(0, 0, 0, 0)

  while (currentDate.getTime() <= endTime) {
    dates.push(new Date(currentDate))
    currentDate.setDate(currentDate.getDate() + 1)
  }

  return dates
}

module.exports = eachDay

