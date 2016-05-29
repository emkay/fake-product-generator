const test = require('tape')
const concat = require('concat-stream')
const has = require('has')
const Faker = require('..')

test('make some data', (t) => {
  const faker = Faker(10)
  const cs = concat((o) => {
    const products = JSON.parse(o.toString())
    products.forEach((p) => {
      t.equal(has(p, 'part_number'), true)
    })
    t.end()
  })

  faker.pipe(cs)
})
