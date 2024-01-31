import drop from 'lodash/drop';
import { bench } from 'vitest';
import _drop from './drop';

bench('lodash', () => {
  drop([1, 2, 3], 2);
});

bench('fuck lodash', () => {
  _drop([1, 2, 3], 2);
});
