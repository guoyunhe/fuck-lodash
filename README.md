# Fuck Lodash

You Know What I Mean.

This is a more complete version than [_You Don't Need Lodash/Underscore_](https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore) or [_You Might Not Need Lodash_](https://youmightnotneed.com/lodash/), with additional bundle size 📦 and performance benchmark 🚀 comparsion.

## Array

### chunk

```js
// 📦 1.87 kB (gzip)
import chunk from 'lodash/chunk';

chunk(['a', 'b', 'c', 'd'], 2);
```

```js
// 📦 117 B (gzip), -94%
const chunk = (input, size) => {
  return input.reduce((arr, item, idx) => {
    return idx % size === 0
      ? [...arr, [item]]
      : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]];
  }, []);
};

chunk(['a', 'b', 'c', 'd'], 2);
```

### compact

```js
// 📦 1.87 kB (gzip)
import chunk from 'lodash/chunk';

compact([0, 1, false, 2, '', 3]);
```

```js
// 📦 117 B (gzip), -94%
const chunk = (input, size) => {
  return input.reduce((arr, item, idx) => {
    return idx % size === 0
      ? [...arr, [item]]
      : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]];
  }, []);
};

chunk(['a', 'b', 'c', 'd'], 2);
```

## Collection

## Date

### now

```js
// 📦 483 B (gzip)
import now from 'lodash/now';

now();
```

```js
// 📦 32 B (gzip)
Date.now();
```

## Function

## Lang

## Math

## Number

## Object

## Seq

## String

## Util

## Properties

## Methods
