// A boy is walking a long way from school to his home. To make the walk more fun he decides to add up all the numbers of the houses that he passes by during his walk. Unfortunately, not all of the houses have numbers written on them, and on top of that the boy is regularly taking turns to change streets, so the numbers don't appear to him in any particular order.

function houseNumbersSum(inputArray) {
  let total = 0;

  for (let i = 0; i < inputArray.length; i++) {
    total += inputArray[i];
    if (inputArray[i] == 0) {
      return total;
    }
  }
}
