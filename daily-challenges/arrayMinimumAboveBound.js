// Given an array of integers inputArray and an integer bound, find the smallest array element strictly greater than bound.

function arrayMinimumAboveBound(inputArray, bound) {
  inputArray = inputArray.filter(input => input > bound);
  inputArray = inputArray.sort((a, b) => a - b);

  return inputArray[0];
}
