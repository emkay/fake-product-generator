const fs = require('fs')
const faker = require('..')(1000000) // gen a million products
const ws = fs.createWriteStream('./data.json')

faker.pipe(ws)
// will be about 500mb so watch out.
