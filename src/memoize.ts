import _memoize from 'nano-memoize';

const memoize = (fn: Func, resolver?: (...args: any[]) => any) =>
  _memoize(fn, {
    equals: resolver ? (a, b) => resolver(a) === resolver(b) : undefined,
  });

export default memoize;
