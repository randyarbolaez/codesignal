// Given an integer size, return array of length size filled with 1s.

function createArray(size) {
  return "1"
    .repeat(size)
    .split("")
    .map(Number);
}
