import concat from 'lodash/concat';
import { bench } from 'vitest';

bench('lodash', () => {
  concat([1], 2, [3], [[4]]);
});

bench('fuck lodash', () => {
  ([1] as any[]).concat(2, [3], [[4]]);
});
