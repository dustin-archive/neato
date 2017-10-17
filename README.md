# neato

> Encode and decode JS objects into compressed arrays

## Install

```
npm i @whaaaley/neato
```

## Usage

### Decode

```js
import { decode } from '@whaaaley/neato'

decode([
  ['foo', 'baz'],
  [['bar', 'qux'], ['qux', 'bar']],
  [[0, 0], [1, 1]]
])
// => [{ foo: 'bar', baz: 'qux' }, { foo: 'qux', baz: 'bar' }]
```

### Encode

```js
import { encode } from '@whaaaley/neato'

encode([
  { foo: 'bar', baz: 'qux' },
  { foo: 'qux', baz: 'bar' }
])
// => [['foo', 'baz'], [['bar', 'qux'], ['qux', 'bar']], [[0, 0], [1, 1]]]
```
