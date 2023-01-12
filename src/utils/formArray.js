export const formArray = (start, end, valueFn = (i) => i) =>
  [...Array(end - start + 1).keys()].map((i) => valueFn(i + start));

export default formArray;
