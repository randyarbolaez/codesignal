// Check whether the given string is a subsequence of the plaintext alphabet.

function alphabetSubsequence(s) {
  let noDuplicates = new Set(s);
  let stringSplitSortJoin = s
    .split("")
    .sort()
    .join("");

  if (s !== stringSplitSortJoin || s.length !== [...noDuplicates].length) {
    return false;
  }

  return true;
}
