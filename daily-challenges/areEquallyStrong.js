// Call two arms equally strong if the heaviest weights they each are able to lift are equal.

function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  let yourTotalStrength = yourLeft + yourRight;
  let friendsTotalStrength = friendsLeft + friendsRight;

  let arrayOfStr = [
    [yourLeft, yourRight],
    [friendsLeft, friendsRight]
  ];

  if (yourTotalStrength === friendsTotalStrength) {
    for (let i = 0; i < arrayOfStr.length; i++) {
      arrayOfStr[0].sort((a, b) => a - b);
      arrayOfStr[1].sort((a, b) => a - b);
      if (arrayOfStr[0][i] !== arrayOfStr[1][i]) {
        return false;
      }
    }
    return true;
  }
  return false;
}
