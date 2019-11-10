// The standard (IEEE 802) format for printing MAC-48 addresses in human-friendly form is six groups of two hexadecimal digits (0 to 9 or A to F), separated by hyphens (e.g. 01-23-45-67-89-AB).

function isMAC48Address(inputString) {
  let arrOfInputStr = inputString.split('-');
  let reg = /^[0-9A-Fa-f]+$/;

  if (arrOfInputStr.length !== 6) {
    return false;
  }

  for (let input of arrOfInputStr) {
    if (reg.test(input) === false || input.length !== 2) {
      return false;
    }
  }

  return true;
}
