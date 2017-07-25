const test = require('tape')
const neato = require('./')

const encoded = [
  [
    'category',
    'make',
    'model',
    'year'
  ], [
    ['aaa', 'bbb', 'ccc', 'ddd'],
    ['eee', 'fff', 'ggg', 'hhh'],
    ['iii', 'jjj', 'kkk', 'lll'],
    [2017, 2016, 2015, 2014]
  ], [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [2, 2, 2, 2],
    [3, 3, 3, 3]
  ]
]

const decoded = [
  {
    category: 'aaa',
    make: 'eee',
    model: 'iii',
    year: 2017
  }, {
    category: 'bbb',
    make: 'fff',
    model: 'jjj',
    year: 2016
  }, {
    category: 'ccc',
    make: 'ggg',
    model: 'kkk',
    year: 2015
  }, {
    category: 'ddd',
    make: 'hhh',
    model: 'lll',
    year: 2014
  }
]

test('neato', function (t) {
  t.plan(1)
  t.same(neato.decode(encoded), decoded, 'decode')
  t.same(neato.encode(decoded), encoded, 'encode')
})
