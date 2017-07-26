const test = require('tape')
const neato = require('./')

const encoded = [
  [
    'foo',
    'bar',
    'baz'
  ], [
    ['a', 'b', 'c', 'd'],
    ['e', 'f', 'g', 'h'],
    ['i', 'j', 'k', 'l']
  ], [
    [0, 0, 0],
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3]
  ]
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

test('neato', function (t) {
  t.plan(2)
  t.same(neato.decode(encoded), decoded, 'decode')
  t.same(neato.encode(decoded), encoded, 'encode')
  // t.same(neato.get(1, 'make', encoded), 'f', 'encode')
})
