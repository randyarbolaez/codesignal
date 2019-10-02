// Given an array of strings, return another array containing all of its longest strings.

function allLongestStrings(inputArray) {
  const longestStringsArray = [];
  let longestString = inputArray[0];

  for (let i = 1; i < inputArray.length; i++) {
    if (longestString.length <= inputArray[i].length) {
      longestString = inputArray[i];
    } else {
      longestString = longestString;
    }
  }

  return inputArray.filter(input => longestString.length <= input.length);
}
