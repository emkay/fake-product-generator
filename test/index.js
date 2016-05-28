const test = require('tape')
const concat = require('concat-stream')
const has = require('has')
const faker = require('..')()

test('make some data', (t) => {
  const s = faker.createReadStream()
  const cs = concat((o) => {
    const products = JSON.parse(o.toString())
    products.forEach((p) => {
      t.equal(has(p, 'part_number'), true)
    })
    t.end()
  })

  s.pipe(cs)

  faker.genProducts(10)
})
