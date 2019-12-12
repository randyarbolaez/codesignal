// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

function arrayMaximalAdjacentDifference(inputArray) {
  let total = [];
  let negativeNumberTurnedToPostive;

  for (let i = 0; i < inputArray.length; i++) {
    total.push(inputArray[i] - inputArray[i + 1]);
  }

  total.map(input => {
    if (input < 0) {
      total.push(input * -1);
    }
    total.sort((a, b) => a - b);
    negativeNumberTurnedToPostive = total[0];
  });

  total.sort((a, b) => b - a);

  if (negativeNumberTurnedToPostive < 0) {
    negativeNumberTurnedToPostive = negativeNumberTurnedToPostive * -1;
  }

  if (negativeNumberTurnedToPostive > total[0]) {
    return negativeNumberTurnedToPostive;
  }

  return total[0];
}
