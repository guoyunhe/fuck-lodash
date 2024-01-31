const differenceBy = (arr1, arr2, iteratee) => {
  if (typeof iteratee === 'string') {
    const prop = iteratee;
    iteratee = (item) => item[prop];
  }
  return arr1.filter((c) => !arr2.map(iteratee).includes(iteratee(c)));
};

export default differenceBy;
