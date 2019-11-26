// Check whether the given string is a substring of the plaintext alphabet.

function alphabetSubstring(s) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let booleanArr = [];

  for (let i = 1; i < s.length; i++) {
    // console.log((alphabet.indexOf(s[i]) - alphabet.indexOf(s[i-1]) == 1))
    if (alphabet.indexOf(s[i]) - alphabet.indexOf(s[i - 1]) == 1) {
      booleanArr.push(true);
    } else {
      booleanArr.push(false);
    }
  }
  return !booleanArr.includes(false);
}
