// Given a divisor and a bound, find the largest integer N such that:

function maxMultiple(divisor, bound) {
  let count = 1;
  let arr = [];

  while (count <= bound) {
    if (count % divisor === 0 && count <= bound) {
      arr.push(count);
    }
    count++;
  }

  return Math.max(...arr);
}
