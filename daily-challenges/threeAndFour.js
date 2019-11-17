// Return a sorted array of all non-negative numbers less than the given n which are divisible both by 3 and 4.

function threeAndFour(n) {
  let arr = [];
  while (n !== -1) {
    console.log(n);
    if (n % 3 === 0 && n % 4 === 0) {
      arr.push(n);
    }
    n--;
  }
  return arr.sort();
}
