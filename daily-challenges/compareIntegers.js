// Compare two integers given as strings.

function compareIntegers(a, b) {
  a = Number(a);
  b = Number(b);

  if (a < b) return "less";
  if (a > b) return "greater";
  if (a == b) return "equal";
}
