// The NAND operation (also known as a Sheffer stroke) is an operation on two logical values. It produces true, if - and only if - at least one of the operands is false.

function shefferStroke(a, b) {
  if (a === false || b === false) {
    return true;
  }
  return false;
}
