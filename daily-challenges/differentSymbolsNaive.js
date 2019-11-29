// Given a string, find the number of different characters in it.

function differentSymbolsNaive(s) {
  let arrOfDiffLetters = [];

  for (let i = 0; i < s.length; i++) {
    if (!arrOfDiffLetters.includes(s[i])) {
      arrOfDiffLetters.push(s[i]);
    }
  }
  return arrOfDiffLetters.length;
}
