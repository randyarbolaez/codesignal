// Given a string, output its longest prefix which contains only digits.

function longestDigitsPrefix(inputString) {
  let inputStringToArr = inputString.split("");
  let arr = [];
  let numberArr = [];

  if (inputStringToArr[0] === " ") {
    return "";
  }

  inputStringToArr.forEach(input => {
    arr.push(Number(input));
  });
  for (let i = 0; i < arr.length; i++) {
    if (!Number.isNaN(arr[i])) {
      numberArr.push(arr[i]);
    } else {
      break;
    }
  }

  return numberArr.length === 0 ? "" : numberArr.join("");
}
