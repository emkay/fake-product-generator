# fake-product-generator
Streaming fake product generator for testing

## Install

`npm i fake-product-generator`

## Use

```javascript
const FPG = require('fake-product-generator')
const rs = FPG(1000)
rs.on('data', console.log)
```

Since `FPG` returns a [readable stream](https://nodejs.org/api/stream.html#stream_class_stream_readable) you can also `pipe` to a write stream.

```javascript
const fs = require('fs')
const FPG = require('fake-product-generator')
const rs = FPG(1000000) // creates a million products!
const ws = fs.createWriteStream('./data.json')
rs.pipe(ws)
```

This is great for creating a ton of sample json without the process crashing because you aren't keeping the entire thing in memory, but just each readable chunk.
