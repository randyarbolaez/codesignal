// Pick-out the largest even number from an array of integers

function maximalEven(inputArray) {
  inputArray = inputArray.filter(input => input % 2 === 0);
  inputArray = inputArray.sort((a, b) => a - b);

  return inputArray[inputArray.length - 1];
}
