# Fuck Lodash

You Know What I Mean.

This is a more complete version than [_You Don't Need Lodash/Underscore_](https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore) or [_You Might Not Need Lodash_](https://youmightnotneed.com/lodash/), with additional features:

- 📦 bundle size comparsion, powered by [esbuild](https://esbuild.github.io/) and [bundlejs.com](https://bundlejs.com/).
- 🚀 performance benchmark, powered by [vitest](https://vitest.dev/).

A good lodash function alternative should be both **smaller** and **faster**. In some cases, here is no drop-in replacement, you have to modify your code a little bit.

## Array

### chunk

```js filename="lodash"
// 📦 1.87 kB (gzip)
// 🚀 5.24 mHz
import chunk from 'lodash/chunk';

chunk(['a', 'b', 'c', 'd'], 2);
```

```js filename="fuck-lodash"
// 📦 126 B (gzip), 93% smaller 👍
// 🚀 7.41 mHz, 20% slower 👍
const chunk = (arr, chunkSize = 1, cache = []) => {
  const tmp = [...arr];
  if (chunkSize <= 0) return cache;
  while (tmp.length) cache.push(tmp.splice(0, chunkSize));
  return cache;
};

chunk(['a', 'b', 'c', 'd'], 2);
```

### compact

```js filename="lodash"
// 📦 426 B (gzip)
// 🚀 5.52 mHz
import compact from 'lodash/compact';

compact([0, 1, false, 2, '', 3]);
```

```js filename="fuck-lodash"
// 📦 53 B (gzip), 87% smaller 👍
// 🚀 14.5 mHz, 163% faster 👍
[0, 1, false, 2, '', 3].filter(Boolean);
```

### concat

```js filename="lodash"
// 📦 1.27 kB (gzip)
// 🚀 1.96 mHz
import concat from 'lodash/concat';

concat([1], 2, [3], [[4]]);
```

```js filename="fuck-lodash"
// 📦 45 B (gzip), 96% smaller 👍
// 🚀 3.63 mHz, 85% faster 👍
[1].concat(2, [3], [[4]]);
```

### difference

```js filename="lodash"
// 📦 4.29 kB (gzip)
// 🚀 3.33 mHz
import difference from 'lodash/difference';

difference([2, 1], [3, 2]);
```

```js filename="fuck-lodash"
// 📦 77 B (gzip), 98% smaller 👍
// 🚀 12.1 mHz, 264% faster 👍
const difference = (arr1, arr2) => arr1.filter((x) => !arr2.includes(x));

difference([2, 1], [3, 2]);
```

### differenceBy

```js filename="lodash"
// 📦 9.46 kB (gzip)
// 🚀 1.05 mHz
import differenceBy from 'lodash/differenceBy';

differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], 'x');
```

```js filename="fuck-lodash"
// 📦 162 B (gzip), 98% smaller 👍
// 🚀 2.58 mHz, 146% faster 👍
const differenceBy = (arr1, arr2, iteratee) => {
  if (typeof iteratee === 'string') {
    const prop = iteratee;
    iteratee = (item) => item[prop];
  }
  return arr1.filter((c) => !arr2.map(iteratee).includes(iteratee(c)));
};

differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], 'x');
```

### differenceWith

TODO

### drop

```js filename="lodash"
// 📦 1.42 kB (gzip)
// 🚀 4.67 mHz
import drop from 'lodash/drop';

drop([1, 2, 3], 2);
```

```js filename="fuck-lodash"
// 📦 60 B (gzip), 96% smaller 👍
// 🚀 9.67 mHz, 107% faster 👍
const drop = (arr, n = 1) => arr.slice(n);

drop([1, 2, 3], 2);
```

## Collection

## Date

### now

```js filename="lodash"
// 📦 483 B (gzip)
// 🚀 4.95 mHz
import now from 'lodash/now';

now();
```

```js filename="fuck-lodash"
// 📦 32 B (gzip), 93% smaller 👍
// 🚀 11.4 mHz, 131% faster 👍
Date.now();
```

## Function

## Lang

### cloneDeep

```js filename="lodash"
// 📦 7.38 kB (gzip)
// 🚀 0.36 mHz
import cloneDeep from 'lodash/cloneDeep';

const obj = {
  string: 'abcdef',
  number: 123.456,
  array: [
    {
      name: 'WebInspector',
      version: '537.36',
    },
    {
      name: 'WebInspector',
      version: '537.36',
    },
  ],
};

cloneDeep(obj);
```

```js filename="fuck-lodash"
// 📦 1.15 kB (gzip), 84.4% smaller 👍
// 🚀 1.10 mHz, 204% faster 👍
import rfdc from 'rfdc';

const cloneDeep = rfdc();

const obj = {
  string: 'abcdef',
  number: 123.456,
  array: [
    {
      name: 'WebInspector',
      version: '537.36',
    },
    {
      name: 'WebInspector',
      version: '537.36',
    },
  ],
};

cloneDeep(obj);
```

### isEqual

```js filename="lodash"
// 📦 6.4 kB (gzip)
// 🚀 1.61 mHz
import isEqual from 'lodash/isEqual';

isEqual({ a: 1, b: 2 }, { b: 2, a: 1 });
```

```js filename="fuck-lodash"
// 📦 609 B (gzip), 91% smaller 👍
// 🚀 4.16 mHz, 158% faster 👍
import isEqual from 'react-fast-compare';

isEqual({ a: 1, b: 2 }, { b: 2, a: 1 });
```

## Math

## Number

## Object

## Seq

## String

## Util

## Properties

## Methods
