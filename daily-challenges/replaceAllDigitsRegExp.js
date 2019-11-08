// Implement a function that replaces each digit in the given string with a '#' character.

function replaceAllDigitsRegExp(input) {
  let reg = /[0-9]/g;
  // return input.replace(reg, '#');

  let arr = [];

  for (let element of input) {
    if (element.match(reg)) {
      arr.push('#');
    } else {
      arr.push(element);
    }
  }

  return arr.join('');
}
