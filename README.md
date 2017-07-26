# neato
A tiny library to store and get data quickly.

## Rationale

### [Perceived performance](https://en.wikipedia.org/wiki/Perceived_performance)

Neato organizes and removes duplicate keys and values before an action would be triggered, instead of after. Using `neato.merge` when fetching chunks of data combined with using `neato.values` or `neato.keys` to use that data will increase perceived performance. While total computation time may be longer, getting data from neato arrays is almost instant.

### Smaller data

Neato works best with data that has a fixed set of repeated keys and values. Neato organizes data and removes duplicates. Size reduction heavily relies on how repetitive and how large your data is.

## Usage

### `neato.encode(data)`

Encode an array of objects into a neato array.

```js
// input
neato.encode([
  { foo: 'bar', baz: 'qux' },
  { foo: 'qux', baz: 'bar' }
])

// output
[
  ['foo', 'baz'],
  [['bar', 'qux'], ['qux', 'bar']],
  [[0, 0], [1, 1]]
]
```

### `neato.decode(data)`

Decode a neato array into an array of objects.

```js
// input
neato.decode([
  ['foo', 'baz'],
  [['bar', 'qux'], ['qux', 'bar']],
  [[0, 0], [1, 1]]
])

// output
[
  { foo: 'bar', baz: 'qux' },
  { foo: 'qux', baz: 'bar' }
]
```

### `neato.merge(a, b)`

Merge two neato arrays into one.

### `neato.keys(data)`

Get an array of all keys from a neato array.

### `neato.values(data, key)`

Get an array of all values for a key in a neato array.

### `neato.get(data, key)`

Get a value for a key in a neato array.
