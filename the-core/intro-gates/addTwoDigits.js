// You are given a two-digit integer n. Return the sum of its digits.

function addTwoDigits(n) {
  let nToStringThenArr = n.toString().split('');

  return nToStringThenArr.map(Number).reduce((a, b) => a + b, 0);
}
