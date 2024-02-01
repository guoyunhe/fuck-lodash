import memoize from 'lodash/memoize';
import { bench } from 'vitest';
import _memoize from './memoize';

function sum(args: number[]) {
  return args.reduce((p, c) => p + c, 0);
}

const memoized = memoize(sum, JSON.stringify);
bench('lodash', () => {
  memoized([1, 2, 3, 4]);
  memoized([1, 2, 3]);
  memoized([1, 2, 3, 4]);
  memoized([1, 2, 3]);
});

const _memoized = _memoize(sum, JSON.stringify);
bench('fuck lodash', () => {
  _memoized([1, 2, 3, 4]);
  _memoized([1, 2, 3]);
  _memoized([1, 2, 3, 4]);
  _memoized([1, 2, 3]);
});
