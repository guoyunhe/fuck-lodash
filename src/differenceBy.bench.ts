import differenceBy from 'lodash/differenceBy';
import { bench } from 'vitest';
import _differenceBy from './differenceBy';

bench('lodash', () => {
  differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
  differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], 'x');
});

bench('fuck lodash', () => {
  _differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
  _differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], 'x');
});
