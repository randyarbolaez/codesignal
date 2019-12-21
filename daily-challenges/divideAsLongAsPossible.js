// Given integers n and d, divide n by d as long as the result is integer and return the result.

function divideAsLongAsPossible(n, d) {
  let arr = [];
  while (Number.isInteger(n)) {
    arr.push(n);
    n = n / d;
  }
  return arr[arr.length - 1];
}
