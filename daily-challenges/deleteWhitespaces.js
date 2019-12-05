// Given a string, delete whitespaces from it.

function deleteWhitespaces(inputStr) {
  let inputArr = inputStr.split("");
  let tempArr = [];
  for (let input of inputArr) {
    if (input !== " ") {
      tempArr.push(input);
    }
  }
  return tempArr.join("");
}
