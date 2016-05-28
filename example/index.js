const fs = require('fs')
const faker = require('..')()
const rs = faker.createReadStream()
const ws = fs.createWriteStream('./data.json')

rs.pipe(ws)

faker.genProducts(1000000) // generate a million product entries!

// will be about 500mb so watch out.
