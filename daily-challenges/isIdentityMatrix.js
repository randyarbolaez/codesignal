// Check if the given matrix is an identity matrix.

function isIdentityMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] !== 0) {
        if (matrix[j][i] !== 1) {
          return false;
        }
      }
    }
    if (matrix[i][i] !== 1) {
      return false;
    }
  }
  return true;
}
