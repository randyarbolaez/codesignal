// Correct variable names consist only of English letters, digits and underscores and they can't start with a digit.

function variableName(name) {
  let reg = /[^A-Za-z0-9_]/g;
  if (name.match(reg) || name[0].match(/[0-9]/)) {
    return false;
  }
  return true;
}
