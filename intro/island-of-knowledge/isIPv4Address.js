// An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network that uses the Internet Protocol for communication. There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.

function isIPv4Address(inputString) {
  let arrOfNumbers = [];
  let counter = 0;

  if (inputString[0] === '.' || inputString[inputString.length - 1] === '.') {
    return false;
  }

  inputString = inputString.split('.');

  if (inputString.length > 4) {
    return false;
  }

  let filtered = inputString.filter(el => {
    return el !== '';
  });

  if (filtered.length !== 4) {
    return false;
  }

  inputString.forEach((input, i) => {
    arrOfNumbers.push(Number(input));
  });

  for (let i = 0; i < arrOfNumbers.length; i++) {
    if (isNaN(arrOfNumbers[i])) {
      return false;
    }
  }

  for (const element of arrOfNumbers) {
    if (255 >= element && element >= 0) {
      counter++;
    }
  }

  if (counter > 3) {
    return true;
  }
  return false;
}
