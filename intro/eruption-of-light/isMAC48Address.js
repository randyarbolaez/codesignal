// The standard (IEEE 802) format for printing MAC-48 addresses in human-friendly form is six groups of two hexadecimal digits (0 to 9 or A to F), separated by hyphens (e.g. 01-23-45-67-89-AB).

function isMAC48Address(inputString) {
  let reg = /[0-9A-Fa-f]+/g;
  let stringSplit = inputString.split('-');

  if (stringSplit.length === 6) {
    return inputString.match(reg).join('-') === stringSplit.join('-')
      ? true
      : false;
  }

  return false;
}
