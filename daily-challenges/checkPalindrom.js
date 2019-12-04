// Given the string, check if it is a palindrome.

function checkPalindrome(inputString) {
  let reversedString = inputString
    .split("")
    .reverse()
    .join("");

  return inputString === reversedString;
}
