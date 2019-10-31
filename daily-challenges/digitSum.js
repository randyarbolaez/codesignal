// Given an integer, find the sum of all its digits.

function digitSum(n) {
  let nToStringSplitToNumber = n
    .toString()
    .split('')
    .map(Number);
  return nToStringSplitToNumber.reduce((a, b) => a + b, 0);
}
