// After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms has a different cost, and some of them are free, but there's a rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms.

function matrixElementsSum(matrix) {
  const numbersToBeAdded = [];
  let i = 0;
  let j = 0;

  while (i < matrix[0].length) {
    while (j < matrix.length) {
      if (matrix[j][i] === 0) {
        break;
      }
      numbersToBeAdded.push(matrix[j][i]);
      j++;
    }
    i++;
    j = 0;
  }

  return numbersToBeAdded.reduce((a, b) => a + b, 0);
}
