// In tennis, the winner of a set is based on how many games each player wins. The first player to win 6 games is declared the winner unless their opponent had already won 5 games, in which case the set continues until one of the players has won 7 games.

function tennisSet(score1, score2) {
  if ((score1 === 6 || score2 === 6) && (score1 < 5 || score2 < 5)) {
    return true;
  }

  if (score1 === 7 && score2 > 6) {
    return false;
  }

  if (score2 === 7 && score1 > 6) {
    return false;
  }

  if (score2 === 7 && score1 >= 5) {
    return true;
  }

  if (score1 === 7 && score2 >= 5) {
    return true;
  }

  return false;
}
