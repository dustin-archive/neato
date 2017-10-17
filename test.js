const test = require('tape')
const { decode, encode } = require('./')

const encoded = [
  ['foo', 'bar', 'baz'],
  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'],
  [[0, 0], [1, 1], [2, 2], [3, 3]]
]

const decoded = [
  {
    foo: 'a',
    bar: 'e',
    baz: 'i'
  }, {
    foo: 'b',
    bar: 'f',
    baz: 'j'
  }, {
    foo: 'c',
    bar: 'g',
    baz: 'k'
  }, {
    foo: 'd',
    bar: 'h',
    baz: 'l'
  }
]

test('neato', ({ plan, same }) => {
  plan(2)
  same(decode(encoded), decoded, 'decode')
  same(encode(decoded), encoded, 'encode')
})
