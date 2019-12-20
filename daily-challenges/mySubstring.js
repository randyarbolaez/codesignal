// Implement an algorithm that can output the substring of the given string within specified bounds.

function mySubstring(inputString, l, r) {
  let tempArr = [];
  for (let i = l; i <= r; i++) {
    tempArr.push(inputString[i]);
  }
  return tempArr.join("");
}
