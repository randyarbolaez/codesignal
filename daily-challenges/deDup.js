// Given an array of integers, remove all of the duplicates

function deDup(a) {
  // a = new Set(a)
  // return [...a];

  let arr = [];

  for (let input of a) {
    if (!arr.includes(input)) {
      arr.push(input);
    }
  }

  return arr;
}
