# Fuck Lodash

You Know What I Mean.

This is a more complete version than [_You Don't Need Lodash/Underscore_](https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore) or [_You Might Not Need Lodash_](https://youmightnotneed.com/lodash/), with additional features:

- 📦 bundle size comparsion, powered by [esbuild](https://esbuild.github.io/) and [bundlejs.com](https://bundlejs.com/).
- 🚀 performance benchmark, powered by [vitest](https://vitest.dev/).

A good lodash function alternative should be both **smaller** and **faster**. In some cases, here is no drop-in replacement, you have to modify your code a little bit.

## Array

### chunk

```js file
// 📦 1.87 kB (gzip)
// 🚀 5.24 mHz
import chunk from 'lodash/chunk';

chunk(['a', 'b', 'c', 'd'], 2);
```

```js
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

```js
// 📦 426 B (gzip)
// 🚀 5.52 mHz
import compact from 'lodash/compact';

compact([0, 1, false, 2, '', 3]);
```

```js
// 📦 53 B (gzip), 87% smaller 👍
// 🚀 14.5 mHz, 163% faster 👍
[0, 1, false, 2, '', 3].filter(Boolean);
```

### concat

```js
// 📦 1.27 kB (gzip)
// 🚀 1.96 mHz
import concat from 'lodash/concat';

concat([1], 2, [3], [[4]]);
```

```js
// 📦 45 B (gzip), 96% smaller 👍
// 🚀 3.63 mHz, 85% faster 👍
[1].concat(2, [3], [[4]]);
```

## Collection

## Date

### now

```js
// 📦 483 B (gzip)
// 🚀 4.95 mHz
import now from 'lodash/now';

now();
```

```js
// 📦 32 B (gzip), 93% smaller 👍
// 🚀 11.4 mHz, 131% faster 👍
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
