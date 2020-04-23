// You are supposed to label a bunch of boxes with numbers from 0 to n, and all the labels are stored in the array arr. Unfortunately one of the labels is missing. Your task is to find it.

function missingNumber(arr) {
  let largestNumber = Math.max(...arr);
  for (let i = 0; i < arr.length; i++) {
    if (!arr.includes(i)) {
      return i;
    }
  }
  return largestNumber + 1;
}
