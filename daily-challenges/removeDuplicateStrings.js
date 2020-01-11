// Remove all duplicates from an already sorted (in lexicographical order) array of strings.

function removeDuplicateStrings(inputArray) {
  let tempArr = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray.includes(inputArray[i], i + 1)) {
      continue;
    } else {
      tempArr.push(inputArray[i]);
    }
  }
  return tempArr;
}
