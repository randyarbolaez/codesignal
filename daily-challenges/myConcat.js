// Concatenate given strings using a specific separator.

function myConcat(strings, separator) {
  let concatenatedStr = "";
  for (input of strings) {
    concatenatedStr += input + separator;
  }
  return concatenatedStr;
}
