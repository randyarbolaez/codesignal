// Determine whether the given string can be obtained by one concatenation of some string to itself.

function isTandemRepeat(inputString) {
  let halfOfStringLength = inputString.length / 2;

  let firstHalf = inputString.slice(0, halfOfStringLength);
  let secondHalf = inputString.slice(halfOfStringLength, inputString.length);

  if (firstHalf === secondHalf) {
    return true;
  }

  return false;
}
