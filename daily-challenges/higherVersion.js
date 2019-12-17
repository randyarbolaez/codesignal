// Given two version strings composed of several non-negative decimal fields separated by periods ("."), both strings contain equal number of numeric fields. Return true if the first version is higher than the second version and false otherwise.

function higherVersion(ver1, ver2) {
  let ver1StringToNum = Number(ver1.split(".").join(""));
  let ver2StringToNum = Number(ver2.split(".").join(""));

  return ver1StringToNum > ver2StringToNum;
}
