// Given array of integers, find the 0-based index of its minimal element.

function arrayMinimumIndex(inputArray) {
  // return inputArray.indexOf(Math.min(...inputArray));

  let lowestInput = inputArray[0];

  for (let i = 1; i < inputArray.length; i++) {
    if (lowestInput < inputArray[i]) {
      lowestInput;
    } else {
      lowestInput = inputArray[i];
    }
  }
  return inputArray.indexOf(lowestInput);
}
