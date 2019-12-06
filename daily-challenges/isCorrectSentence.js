// A string is said to be a correct sentence if it starts with the capital letter and ends with a full stop (.).

function isCorrectSentence(inputString) {
  let reg = /[A-Z]/;

  return (
    inputString[0] === inputString[0].toUpperCase() &&
    inputString[inputString.length - 1] === "." &&
    reg.test(inputString[0])
  );
}
