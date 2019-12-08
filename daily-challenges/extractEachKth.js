// Given array of integers, remove each kth element from it.

function extractEachKth(inputArray, k) {
  return inputArray.filter((input, i) => {
    return (i + 1) % k != 0;
  });
}
