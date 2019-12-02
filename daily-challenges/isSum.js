// Triangular Numbers are positive integers that can be represented as a sum of all integers from 1 up to some n.Determine if the given number is Triangular.

function isSum(value) {
  let total = 0;
  let i = 1;

  if (value == 1) {
    return true;
  }

  while (value > i) {
    total = i + total;
    i++;
    if (total === value) {
      return true;
    }
  }
  return false;
}
