// Given a positive integer number and a certain length, we need to modify the given number to have a specified length. We are allowed to do that either by cutting out leading digits (if the number needs to be shortened) or by adding 0s in front of the original number.

function integerToStringOfFixedWidth(number, width) {
  number = number.toString().split("");
  for (let num of number) {
    if (number.length < width) {
      number.unshift(0);
    }
    if (number.length > width) {
      number.shift();
    }
  }
  return number.join("");
}
