// Find the number of fixed points in a permutation of [1, 2, 3, ..., n] for some n.

function fixedPointsPermutation(permutation) {
  let unsortedArr = [...permutation];
  let sortedArr = permutation.sort((a, b) => a - b, 0);
  let numbersThatStayedInTheSameIndex = 0;
  for (let i = 0; i < unsortedArr.length; i++) {
    if (unsortedArr[i] == sortedArr[i]) {
      numbersThatStayedInTheSameIndex++;
    }
  }
  return numbersThatStayedInTheSameIndex;
}
