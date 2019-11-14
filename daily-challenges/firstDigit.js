// Find the leftmost digit that occurs in a given string.

function firstDigit(inputString) {
  let reg = /[0-9]/;

  let digit = inputString.match(reg);

  return digit[0];
}
