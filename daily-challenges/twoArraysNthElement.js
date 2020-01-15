// Given two sorted arrays of integers and an integer n, find the nth (0-based) element of their sorted union.

function twoArraysNthElement(array1, array2, n) {
  let tempArr = [...array1, ...array2].sort();
  return tempArr[n];
}
