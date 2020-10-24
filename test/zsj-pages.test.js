const test = require('ava')
const zsjPages = require('..')

// TODO: Implement module test
test('<test-title>', t => {
  const err = t.throws(() => zsjPages(100), TypeError)
  t.is(err.message, 'Expected a string, got number')

  t.is(zsjPages('w'), 'w@zce.me')
  t.is(zsjPages('w', { host: 'wedn.net' }), 'w@wedn.net')
})
