// Several people are standing in a row and need to be divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.

function alternatingSums(a) {
  let arrOne = [];
  let arrTwo = [];
  let arrFinal = [];

  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      arrOne.push(a[i]);
    } else {
      arrTwo.push(a[i]);
    }
  }

  arrOne = arrOne.reduce((a, b) => a + b, 0);
  arrTwo = arrTwo.reduce((a, b) => a + b, 0);

  arrFinal.push(arrOne, arrTwo);

  return arrFinal;
}
