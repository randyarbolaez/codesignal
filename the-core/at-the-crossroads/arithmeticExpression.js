// Consider an arithmetic expression of the form a#b=c. Check whether it is possible to replace # with one of the four signs: +, -, * or / to obtain a correct expression.

function arithmeticExpression(a, b, c) {
  if (c === a + b) {
    return true;
  }
  if (c === a - b) {
    return true;
  }
  if (c === a * b) {
    return true;
  }
  if (c === a / b) {
    return true;
  }

  return false;
}
