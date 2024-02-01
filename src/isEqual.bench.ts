import isEqual from 'lodash/isEqual';
import { bench } from 'vitest';
import _isEqual from './isEqual';

bench('lodash', () => {
  isEqual({ a: 1, b: 2 }, { b: 2, a: 1 });
});

bench('fuck lodash', () => {
  _isEqual({ a: 1, b: 2 }, { b: 2, a: 1 });
});
