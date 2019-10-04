// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

function addBorder(picture) {
  let asterisk = '*';
  let finishedArray = [];

  for (let i = 0; i < picture.length; i++) {
    var string = '*';
    string += picture[i];
    string += '*';
    finishedArray.push(string);
  }

  finishedArray.unshift(asterisk.repeat(string.length));
  finishedArray.push(asterisk.repeat(string.length));

  return finishedArray;
}
