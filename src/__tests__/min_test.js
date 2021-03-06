var assert = require('power-assert')
var min = require('../min')

describe('min', function() {
  it('returns earliest date', function() {
    var result = min(
      new Date(1989, 6 /* Jul */, 10),
      new Date(1987, 1 /* Feb */, 11)
    )
    assert.deepEqual(result, new Date(1987, 1 /* Feb */, 11))
  })

  it('allows to pass more than 2 arguments', function() {
    var result = min(
      new Date(1987, 1 /* Feb */, 11),
      new Date(1989, 6 /* Jul */, 10),
      new Date(1985, 6 /* Jul */, 2),
      new Date(1990, 0 /* Jan */, 1)
    )
    assert.deepEqual(result, new Date(1985, 6 /* Jul */, 2))
  })

  it('accepts strings', function() {
    var result = min(
      new Date(1987, 1 /* Feb */, 11).toISOString(),
      new Date(1989, 6 /* Jul */, 10).toISOString()
    )
    assert.deepEqual(result, new Date(1987, 1 /* Feb */, 11))
  })

  it('accepts timestamps', function() {
    var result = min(
      new Date(1989, 6 /* Jul */, 10).getTime(),
      new Date(1987, 1 /* Feb */, 11).getTime()
    )
    assert.deepEqual(result, new Date(1987, 1 /* Feb */, 11))
  })
})

