// Implement an algorithm that can output a substring of the given string given a starting point and a length.

function mySubstringByLength(inputString, start, length) {
  inputString = inputString.split("");
  return inputString.splice(start, length).join("");
}
