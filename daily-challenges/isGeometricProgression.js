// Given a sequence determine if it's a geometric progression or not.

function isGeometricProgression(sequence) {
  let divisibleNumber = sequence[0] / sequence[1];
  let arrOfBoolean = [];

  for (let i = 0; i < sequence.length; i++) {
    if (isNaN(sequence[i] / sequence[i + 1])) {
      break;
    }
    arrOfBoolean.push(sequence[i] / sequence[i + 1] === divisibleNumber);
  }
  return !arrOfBoolean.includes(false);
}
