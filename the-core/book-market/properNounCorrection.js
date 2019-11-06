// Proper nouns always begin with a capital letter, followed by small letters.

function properNounCorrection(noun) {
  noun = noun
    .toLowerCase()
    .split('')
    .join('');

  return noun.replace(noun[0], noun[0].toUpperCase());
}
