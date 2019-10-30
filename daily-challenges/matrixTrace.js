// Given a matrix, find its trace.

function matrixTrace(matrix) {
  let arr = [];
  for (let i = 0; i < matrix.length; i++) {
    arr.push(matrix[i][i]);
  }

  return arr.reduce((a, b) => a + b, 0);
}
