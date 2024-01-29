import chunk from 'lodash/chunk';
import { bench } from 'vitest';

bench('lodash', () => {
  chunk(['a', 'b', 'c', 'd'], 2);
});

bench('fuck lodash', () => {
  const chunk = (input, size) => {
    return input.reduce((arr, item, idx) => {
      return idx % size === 0
        ? [...arr, [item]]
        : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]];
    }, []);
  };

  chunk(['a', 'b', 'c', 'd'], 2);
});
