# Fuck Lodash

You Know What I Mean.

This is a more complete version than [_You Don't Need Lodash/Underscore_](https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore) or [_You Might Not Need Lodash_](https://youmightnotneed.com/lodash/), with additional features:

- 📦 bundle size comparsion, powered by [esbuild](https://esbuild.github.io/) and [bundlejs.com](https://bundlejs.com/).
- 🚀 performance benchmark, powered by [vitest](https://vitest.dev/).

A good lodash function alternative should be both **smaller** and **faster**. In some cases, here is no drop-in replacement, you have to modify your code a little bit.

## Array

### chunk

```js
// 📦 1.87 kB (gzip)
// 🚀 5,38 kHz
import chunk from 'lodash/chunk';

chunk(['a', 'b', 'c', 'd'], 2);
```

```js
// 📦 117 B (gzip), 94% smaller 👍
// 🚀 4,31 kHz, 25% slower 👎
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
// 📦 426 kB (gzip)
// 🚀 5,52 kHz
import compact from 'lodash/compact';

compact([0, 1, false, 2, '', 3]);
```

```js
// 📦 53 B (gzip), -87% smaller 👍
// 🚀 14,5 kHz, 263% faster 👍
[0, 1, false, 2, '', 3].filter(Boolean);
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
