// Given a string, your task is to replace each of its characters by the next one in the English alphabet; i.e. replace a with b, replace b with c, etc (z would be replaced by a).

function alphabeticShift(inputString) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let wordIndex = [];
  let word = [];
  let alphabetArr = alphabet.split('');
  let inputStringArr = inputString.split('');

  for (const input of inputStringArr) {
    for (const letter of alphabetArr) {
      if (input === letter) {
        if (alphabetArr.indexOf(letter) === 25) {
          wordIndex.push(0);
        } else {
          wordIndex.push(alphabetArr.indexOf(letter) + 1);
        }
      }
    }
  }

  for (const index of wordIndex) {
    word.push(alphabet[index]);
  }

  return word.join('');
}
