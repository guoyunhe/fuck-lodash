import { klona } from 'klona/json';
import cloneDeep from 'lodash/cloneDeep';
import rfdc from 'rfdc';
import { bench } from 'vitest';

const clone = rfdc();

const obj = {
  string: 'abcdef',
  number: 123.456,
  array: [
    {
      name: 'WebInspector',
      version: '537.36',
    },
    {
      name: 'WebInspector',
      version: '537.36',
    },
  ],
};

bench('lodash', () => {
  cloneDeep(obj);
});

bench('rfdc', () => {
  clone(obj);
});

bench('klona/json', () => {
  klona(obj);
});
