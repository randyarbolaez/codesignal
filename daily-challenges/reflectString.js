// Define an alphabet reflection as follows: a turns into z, b turns into y, c turns into x, ..., n turns into m, m turns into n, ..., z turns into a.

function reflectString(inputString) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let str = "";

  for (let input of inputString) {
    str += alphabet[alphabet.length - (alphabet.indexOf(input) + 1)];
  }

  return str;
}
