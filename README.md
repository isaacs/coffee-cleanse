# coffee-cleanse

This is a nice linty-type thing to throw in your program, to make sure
that you're remembering to compile your compiled-to-js language modules
into js, as god intended.

Usage:

```javascript
require('coffee-cleanse')
```

All modules that aren't .js/.json/.node-type modules are now out of the
require.cache, and require.extensions is frozen solid.

## Testing with prose.io, Ignore this.