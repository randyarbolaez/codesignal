// n children have got m pieces of candy. They want to eat as much candy as they can, but each child must eat exactly the same amount of candy as any other child. Determine how many pieces of candy will be eaten by all the children together. Individual pieces of candy cannot be split.

function candies(n, m) {
  let count = 0;
  let arr = [];
  while (count * n <= m) {
    arr.push(count * n);
    count++;
  }
  return arr[arr.length - 1];
}
