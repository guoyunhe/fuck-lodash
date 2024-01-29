import chunk from 'lodash/chunk';
import { bench } from 'vitest';
import _chunk from './chunk';

bench('lodash', () => {
  chunk(['a', 'b', 'c', 'd'], 2);
});

bench('fuck lodash', () => {
  _chunk(['a', 'b', 'c', 'd'], 2);
});
