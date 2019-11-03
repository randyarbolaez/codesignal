// Given two 3D vectors, find their dot product.

function dotProduct(v1, v2) {
  let arr = [];
  for (let i = 0; i < v1.length; i++) {
    arr.push(v1[i] * v2[i]);
  }

  return arr.reduce((a, b) => a + b, 0);
}
