// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

function isLucky(n) {
  let nFirstHalf = [];
  let nSecondHalf = [];
  let nToString = n.toString().split('');
  const nEvenlySplit = nToString.length / 2;
  let nFirstHalfTotal;
  let nSecondHalfTotal;

  let nFirstHalfString = nToString.slice(0, nEvenlySplit).map(num => {
    nFirstHalf.push(Number(num));
  });

  let nSecondHalfString = nToString.slice(nEvenlySplit).map(num => {
    nSecondHalf.push(Number(num));
  });

  nFirstHalf.reduce((a, b) => {
    return (nFirstHalfTotal = a + b);
  }, 0);

  nSecondHalf.reduce((a, b) => {
    return (nSecondHalfTotal = a + b);
  }, 0);

  return nFirstHalfTotal === nSecondHalfTotal;
}
