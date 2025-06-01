export function analyzeArray(array) {
  const size = array.length;
  let average;
  let min = Math.min(...array);
  let max = Math.max(...array);

  // calculate the average
  let sum = 0;
  for (let i = 0; i < size; i++) {
    sum = sum + array[i];
  }
  average = sum / size;

  const result = {
    average: average,
    length: size,
    min: min,
    max: max,
  };

  return result;
}
