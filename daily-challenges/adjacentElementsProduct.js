// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

function adjacentElementsProduct(inputArray) {
  const numbersMultiplied = [];
  for (let i = 0; i < inputArray.length; i++) {
    numbersMultiplied.push(inputArray[i] * inputArray[i + 1]);
  }
  numbersMultiplied.pop();
  return Math.max(...numbersMultiplied);
}
