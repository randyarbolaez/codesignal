// Define a word as a sequence of consecutive English letters. Find the longest word from the given string.

function longestWord(text) {
  let splitText = text.split(" ");
  let arr = [];
  let arrOfLength = [];

  for (let text of splitText) {
    let reg = /^[a-zA-Z]+/g;
    let found = text.match(reg);
    arr.push(found);

    for (let input of found.values()) {
      arrOfLength.push(input.length);
    }
  }

  let textWithLongestLength = Math.max(...arrOfLength);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0].length === textWithLongestLength) {
      return arr[i][0];
    }
  }
}
