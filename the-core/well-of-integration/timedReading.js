// Timed Reading is an educational tool used in many schools to improve and advance reading skills. A young elementary student has just finished his very first timed reading exercise. Unfortunately he's not a very good reader yet, so whenever he encountered a word longer than maxLength, he simply skipped it and read on.

function timedReading(maxLength, text) {
  text = text.split(" ");

  let wordsRead = 0;

  for (word of text) {
    let regex = /[A-Za-z]/g;
    let found = word.match(regex);
    if (found === null) {
      return 0;
    }
    found = found.join("");
    if (found.length <= maxLength) {
      wordsRead++;
    }
  }

  return wordsRead;
}
