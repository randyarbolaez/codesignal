// Given the string, check if it is a palindrome.

function checkPalindrome(inputString) {
  const reversedString = inputString
    .split('')
    .reverse()
    .join('');
  if (inputString === reversedString) {
    return true;
  }
  return false;
}
