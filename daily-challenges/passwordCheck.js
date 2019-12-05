// Determine whether a given password is complex enough.

function passwordCheck(inputString) {
  let capitalReg = /[A-Z]/g;
  let lowercaseReg = /[a-z]/g;
  let digitReg = /[0-9]/g;
  let anySymbolReg = /./g;

  if (
    inputString.length >= 5 &&
    capitalReg.test(inputString) &&
    lowercaseReg.test(inputString) &&
    digitReg.test(inputString) &&
    anySymbolReg.test(inputString)
  ) {
    return true;
  }

  return false;
}
