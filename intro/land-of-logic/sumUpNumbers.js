// CodeMaster has just returned from shopping. He scanned the check of the items he bought and gave the resulting string to Ratiorg to figure out the total number of purchased items. Since Ratiorg is a bot he is definitely going to automate it, so he needs a program that sums up all the numbers which appear in the given input.

function sumUpNumbers(inputString) {
  // return inputString.match(/\d+/g).map(Number).reduce((a,b) => a+b,0)

  let retrieveNum = inputString.match(/\d+/g);
  let numOnly = [];

  if (!retrieveNum) {
    return 0;
  }

  for (let number of retrieveNum) {
    numOnly.push(parseInt(number));
  }

  return numOnly.reduce((a, b) => a + b, 0);
}
