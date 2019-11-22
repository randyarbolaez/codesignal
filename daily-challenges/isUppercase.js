// Determine if an input is an uppercase English letter.

function isUppercase(symbol) {
  let reg = /[A-Z]/g;
  return reg.test(symbol);
}
