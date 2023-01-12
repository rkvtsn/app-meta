export const formArray = (start, end, valueFn = (i) => i) =>
  [...Array(end - start).keys()].map((i) => valueFn(i + start));

export default formArray;
