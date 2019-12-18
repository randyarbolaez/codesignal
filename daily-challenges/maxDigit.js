// Find the largest digit of the given number.

function maxDigit(n) {
  n = n.toString();
  n = n.split("").map(Number);
  n = n.sort((a, b) => a - b, 0);
  return n[n.length - 1];
}
