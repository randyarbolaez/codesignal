// Several people are standing in a row and need to be divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.

function alternatingSums(a) {
  let teamOne = [];
  let teamTwo = [];
  let teamTotal = [];

  teamOne.push(a[0]);

  for (let i = 1; i < a.length; i++) {
    if (i % 2 !== 0) {
      teamTwo.push(a[i]);
    } else {
      teamOne.push(a[i]);
    }
  }

  let teamOneTotal = teamOne.reduce((a, b) => a + b, 0);
  let teamTwoTotal = teamTwo.reduce((a, b) => a + b, 0);
  teamTotal.push(teamOneTotal, teamTwoTotal);

  return teamTotal;
}
