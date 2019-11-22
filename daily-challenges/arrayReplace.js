// Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.

function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  if (!inputArray.includes(elemToReplace)) {
    return inputArray;
  }

  let reg = new RegExp(elemToReplace, "g");
  let str = inputArray.join(" ");
  let substituteElement = str.replace(reg, substitutionElem);
  let arrayWithString = substituteElement.split(" ");
  return arrayWithString.map(string => {
    return Number(string);
  });
}
