# neato
A tiny library to store and get data quickly.

## Rationale

### [Perceived performance increase](https://en.wikipedia.org/wiki/Perceived_performance)

The main benefit to using neato is that you can increase perceived performance in your app. Neato organizes and removes duplicate keys and values beforehand instead of after an action is triggered. Using `neato.merge` when fetching chunks of data combined with using `neato.values` or `neato.keys` to use that data will increase perceived performance. So while total computation time may be longer, getting data from neato arrays is almost instant.

### Smaller data transfers

Neato works best with data that has a fixed set of repeated keys and values. Neato organizes data and removes duplicates. Any size reduction heavily relies on how repetitive and how large your data is.

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
