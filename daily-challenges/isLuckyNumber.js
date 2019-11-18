// Lucky numbers are the positive integers whose decimal representations contain only the lucky digits 4 and 7.

function isLuckyNumber(n) {
  n = n.toString();
  let tempArr = [];

  for (let i = 0; i < n.length; i++) {
    if (n[i] === "4" || n[i] === "7") {
      tempArr.push(true);
    } else {
      tempArr.push(false);
    }
  }

  console.log(tempArr);

  return !tempArr.includes(false);
}
