// Find the sum of cubes of all integers starting from 1 up to the given integer n, inclusive.

function sumOfCubes(n) {
  let arr = [];

  for (let i = 1; i <= n; i++) {
    arr.push(Math.pow(i, 3));
  }

  return arr.reduce((a, b) => a + b, 0);
}
