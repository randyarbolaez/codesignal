// Check whether a number is a palindrome

function is_palindrome(n) {
  reverseNumber = n
    .toString()
    .split("")
    .reverse()
    .join("");

  if (n == reverseNumber) {
    return 1;
  }

  return 0;
}
