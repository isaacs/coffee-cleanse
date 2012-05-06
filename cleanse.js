// cripple the require.extensions hook so that compile-to-js
// languages can't run without actually being compiled to js

var module = require('module')

var ext = Object.keys(module._extensions).map(function (k) {
  if (k === '.js' || k === '.json' || k === '.node') {
    return [k, module._extensions[k]]
  }
  delete module._extensions[k]
  Object.keys(require.cache).forEach(function (m) {
    if (m.substr(m.lastIndexOf(k)) === k) delete require.cache[m]
  })
}).filter(function (k) { return k }).reduce(function (s, k) {
  return (s[k[0]] = k[1]), s
}, {})

// Even freezing the 
Object.freeze(ext)
Object.freeze(module._extensions)
delete module._extensions
Object.defineProperty(module, '_extensions',
  { readable: true
  , writable: false
  , configurable: false // you see what you make me do!?
  , value: ext
  })

if (module._extensions !== ext) {
  throw new Error('Cleanse failed')
}
