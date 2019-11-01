// Let the integer n be represented by digits a1, a2, ..., ak (the digits are listed from left to right in the order they appear in the decimal representation of n).

function digitDistanceNumber(n) {
  let arr = [];
  let arrOfNumbers = n
    .toString()
    .split('')
    .map(Number);

  for (let i = 0; i < arrOfNumbers.length; i++) {
    arr.push(Math.abs(arrOfNumbers[i + 1] - arrOfNumbers[i]));
  }

  arr.pop();

  return Number(arr.join(''));
}
