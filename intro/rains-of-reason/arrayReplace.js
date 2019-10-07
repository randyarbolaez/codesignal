// Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.

function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  if (!inputArray.includes(elemToReplace)) {
    return inputArray;
  }

  let reg = new RegExp(elemToReplace, 'g');
  let str = inputArray.join(' ');
  let substituteElem = str.replace(reg, substitutionElem);
  let arrayWithStrings = substituteElem.split(' ');
  return arrayWithStrings.map(string => {
    return Number(string);
  });
}
