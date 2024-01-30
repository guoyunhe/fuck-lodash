import _isEqual from 'fast-deep-equal';
import isEqual from 'lodash/isEqual';
import { bench } from 'vitest';

bench('lodash', () => {
  isEqual({ a: 1, b: 2 }, { b: 2, a: 1 });
});

bench('fuck lodash', () => {
  _isEqual({ a: 1, b: 2 }, { b: 2, a: 1 });
});
