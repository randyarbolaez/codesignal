// Given the sequence of integers seq, check if it is strictly increasing.

function checkIncreasingSequence(seq) {
  let tempArr = [];
  for (let i = 1; i < seq.length; i++) {
    if (seq[i - 1] < seq[i]) {
      tempArr.push(true);
    } else {
      tempArr.push(false);
    }
  }
  return !tempArr.includes(false);
}
