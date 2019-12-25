// Given a string, capitalize each lowercase vowel (a, e, i, o, u, y) in it.

function capitalizeVowelsRegExp(input) {
  let tempArr = [];
  for (let element of input.split("")) {
    if (
      element == "a" ||
      element == "e" ||
      element == "i" ||
      element == "o" ||
      element == "u" ||
      element == "y"
    ) {
      tempArr.push(element.toUpperCase());
    } else {
      tempArr.push(element);
    }
  }
  return tempArr.join("");
}
