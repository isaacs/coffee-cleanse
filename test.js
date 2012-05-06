var assert = require('assert')
, path = require('path')

assert.deepEqual(Object.keys(require.extensions),
                 [ '.js', '.json', '.node' ])

require('coffee-script')

assert.deepEqual(Object.keys(require.extensions),
                 [ '.js', '.json', '.node', '.coffee' ])

console.error(require('./foo.coffee'))

assert(-1 !== Object.keys(require.cache)
       .indexOf(path.resolve(__dirname, 'foo.coffee')))

assert(require('./cleanse.js'))

assert(-1 === Object.keys(require.cache)
       .indexOf(path.resolve(__dirname, 'foo.coffee')))

// this should fail!
assert.throws(function () {
  require('coffee-script')
  require('./foo.coffee')
})

console.log('1..1')
console.log('ok - All tests passed')
