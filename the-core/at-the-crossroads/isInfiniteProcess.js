// Given integers a and b, determine whether the following pseudocode results in an infinite loop

function isInfiniteProcess(a, b) {
  let counter = 0;
  while (a !== b) {
    if (counter === 100) {
      return true;
    }
    a++;
    b--;
    counter++;
  }
  return false;
}
