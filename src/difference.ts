const difference = (arr1: any[], arr2: any[]) =>
  arr1.filter((x) => !arr2.includes(x));

export default difference;
