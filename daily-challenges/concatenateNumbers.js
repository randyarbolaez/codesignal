// You are given two positive integers a and b. If you write them down next to each other on a piece of paper with no space between them, you'll get a new number. Return that number.

function concatenateNumbers(a, b) {
  a = a.toString();
  return Number(a.concat(b));
}
