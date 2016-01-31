const test = require('tape')
const faker = require('..')

test('make some data', (t) => {
  t.plan(1)
  const products = faker(100)
  t.equal(products.length, 100, 'should create 100 products')
})
