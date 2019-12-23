// Given a string, check if it can become a palindrome through a case change of some (possibly, none) letters.

function isCaseInsensitivePalindrome(inputString) {
  let reversedString = inputString
    .split("")
    .reverse()
    .join("")
    .toLowerCase();

  return reversedString == inputString.toLowerCase();
}
