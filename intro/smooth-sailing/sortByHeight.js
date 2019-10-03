// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

function sortByHeight(a) {
  let array = a;

  array = array
    .filter(input => {
      if (input !== -1) {
        return input;
      }
    })
    .sort((a, b) => a - b);

  a.map((input, i) => {
    if (input === -1) {
      return i;
    }
  }).map(element => {
    if (typeof element === 'number') {
      array.splice(element, 0, -1);
    }
  });

  return array;
}
