// Given an integer, check that all the digits in the number are the same.

function sameDigitNumber(n) {
  let nToString = n.toString();

  for (let i = 0; i < nToString.length; i++) {
    if (nToString[i] !== nToString[0]) {
      return false;
    }
  }

  return true;
}
