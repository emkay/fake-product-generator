const casual = require('casual')
const Readable = require('readable-stream').Readable

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

function Fake () {
  if (!(this instanceof Fake)) return new Fake()
}

Fake.prototype.createReadStream = () => {
  this.rs = Readable()
  return this.rs
}

Fake.prototype.genProducts = (n, cb) => {
  const rs = this.rs

  rs._read = () => {
    rs.push('[')
    for (let i = 0; i < n; i++) {
      rs.push(JSON.stringify(casual.product))
      if (i < n - 1) rs.push(',')
    }
    rs.push(']')
    rs.push(null)
  }

  if (cb && typeof cb === 'function') return cb()
}
