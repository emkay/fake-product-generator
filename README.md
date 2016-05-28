# fake-product-generator
Streaming fake product generator for testing

## Install

`npm i fake-product-generator`

## Use

```javascript
const faker = require('fake-product-generator')()
const s = fake.createReadStream()

s.on('data', console.log)

faker.genProducts(100)
```
