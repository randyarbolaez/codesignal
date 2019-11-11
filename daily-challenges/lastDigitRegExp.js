// Given a string with at least one digit, extract the rightmost digit from it.

function lastDigitRegExp(inputString) {
  let reg = /\d/g;

  let digit = inputString.match(reg);

  return digit[digit.length - 1];
}
