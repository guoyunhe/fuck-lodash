import difference from 'lodash/difference';
import { bench } from 'vitest';
import _difference from './difference';

bench('lodash', () => {
  difference([2, 1], [3, 2]);
});

bench('fuck lodash', () => {
  _difference([2, 1], [3, 2]);
});
