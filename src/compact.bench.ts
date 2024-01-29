import compact from 'lodash/compact';
import { bench } from 'vitest';

bench('lodash', () => {
  compact([0, 1, false, 2, '', 3]);
});

bench('fuck lodash', () => {
  [0, 1, false, 2, '', 3].filter(Boolean);
});
