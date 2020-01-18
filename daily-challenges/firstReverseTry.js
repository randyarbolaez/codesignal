// Reversing an array can be a tough task, especially for a novice programmer. Mary just started coding, so she would like to start with something basic at first. Instead of reversing the array entirely, she wants to swap just its first and last elements.

function firstReverseTry(arr) {
  if (arr == 0) return [];
  let temp = [...arr];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = temp[0];
  return arr;
}
