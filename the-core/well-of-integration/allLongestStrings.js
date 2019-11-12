// Given an array of strings, return another array containing all of its longest strings.

function allLongestStrings(inputArray) {
  let longestWordLength = inputArray[0].length;

  for (let input of inputArray) {
    if (longestWordLength <= input.length) {
      longestWordLength = input.length;
    } else {
      longestWordLength = longestWordLength;
    }
  }

  return inputArray.filter(input => {
    if (input.length === longestWordLength) {
      return input;
    }
  });
}
