import now from 'lodash/now';
import { bench } from 'vitest';

bench('lodash', () => {
  now();
});

bench('fuck lodash', () => {
  Date.now();
});
