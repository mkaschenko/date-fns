var assert = require('power-assert')
var startOfYear = require('../start_of_year')

describe('startOfYear', function() {
  it('returns date with time setted to 00:00:00 and date setted to first day of year', function() {
    var date = new Date(2014, 8, 2, 11, 55, 00)
    var result = startOfYear(date)
    assert.deepEqual(result,
      new Date(2014, 0, 1, 0, 0, 0, 0)
    )
  })

  it('accepts string', function() {
    var date = new Date(2014, 8, 2, 11, 55, 00)
    var result = startOfYear(date.toISOString())
    assert.deepEqual(result,
      new Date(2014, 0, 1, 0, 0, 0, 0)
    )
  })

  it('accepts timestamp', function() {
    var date = new Date(2014, 8, 2, 11, 55, 00)
    var result = startOfYear(date.getTime())
    assert.deepEqual(result,
      new Date(2014, 0, 1, 0, 0, 0, 0)
    )
  })

  it('does not mutate original date', function() {
    var date = new Date('2014-09-02T11:55:00')
    startOfYear(date)
    assert.deepEqual(date, new Date('2014-09-02T11:55:00'))
  })
})

