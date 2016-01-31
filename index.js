'use strict'
const casual = require('casual')

casual.define('product', () => {
  return {
    part_number: casual.integer(1, 9999999),
    name: casual.title,
    description: casual.description,
    supplier: casual.title,
    vendor: casual.title,
    vendor_part_number: casual.integer(1, 9999999),
    vendor_description: casual.description,
    price: casual.numerify(casual.random_element(['#.##', '##.##', '###.##', '####.##'])),
    image: 'http://lorempixel.com/g/400/300/'
  }
})

module.exports = (n) => {
  let data = []
  for (let i = 0; i < n; i++) {
    let product = casual.product
    data.push(product)
  }

  return data
}
