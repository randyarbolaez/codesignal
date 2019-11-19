// Find the longest string from the given array.

function longestString(inputArray) {
  let greatestInputLength;
  let input;
  if (inputArray.length === 1) {
    return inputArray[0];
  }
  for (let i = 1; i < inputArray.length; i++) {
    if (greatestInputLength === undefined) {
      greatestInputLength = inputArray[i - 1].length;
      input = inputArray[i - 1];
    }

    if (greatestInputLength > inputArray[i].length) {
    } else {
      greatestInputLength = inputArray[i].length;
      input = inputArray[i];
    }
  }
  return input;
}
