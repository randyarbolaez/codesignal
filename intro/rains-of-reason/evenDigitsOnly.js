// Check if all digits of the given integer are even.

function evenDigitsOnly(n) {
  let nToString = n.toString();
  let nToArray = nToString.split('');
  let nToNumber = [];

  for (const element of nToArray) {
    let elemToNumber = Number(element);
    nToNumber.push(elemToNumber);
  }

  function elementEven(currentValue) {
    return currentValue % 2 === 0;
  }

  // return nToNumber.every(elementEven);
}
