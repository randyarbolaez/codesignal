// Given an initial string, switch case of the minimal possible number of letters to make the whole string written in the upper case or in the lower case.

function caseUnification(inputString) {
  let uppercaseReg = /[A-Z]/g;
  let lowercaseReg = /[a-z]/g;

  let upperCaseArr = inputString.match(uppercaseReg);
  let lowerCaseArr = inputString.match(lowercaseReg);

  if (upperCaseArr === null) {
    return inputString.toLowerCase();
  } else if (lowerCaseArr === null) {
    return inputString.toUpperCase();
  } else {
    return upperCaseArr.length > lowerCaseArr.length
      ? inputString.toUpperCase()
      : inputString.toLowerCase();
  }
}
