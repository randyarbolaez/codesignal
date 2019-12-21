// Return a strictly increasing array of all even numbers between given left and right (both inclusive).

function onlyEvenNumbers(left, right) {
  let arr = [];

  while (left <= right) {
    if (left % 2 === 0) {
      arr.push(left);
    }
    left++;
  }
  return arr;
}
