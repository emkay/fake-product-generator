const casual = require('casual')
const Readable = require('readable-stream').Readable
const util = require('util')

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

module.exports = Fake
util.inherits(Fake, Readable)

function Fake (n) {
  if (!(this instanceof Fake)) return new Fake(n)
  this.count = 0
  this.numProducts = n
  Readable.call(this)
}

Fake.prototype._read = function _read () {
  if (this.count === 0) this.push('[')
  if (this.count === this.numProducts) {
    this.push(']')
    this.push(null)
    return
  }
  this.push(JSON.stringify(casual.product))
  if (this.count < this.numProducts - 1) this.push(',')
  this.count += 1
}
