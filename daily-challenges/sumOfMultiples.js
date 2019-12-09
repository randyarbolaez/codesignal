// For given n and k find the sum of all multiples of k that are not greater than n.

function sumOfMultiples(n, k) {
  let multiples = [];

  for (let i = 1; i <= 15; i++) {
    let multiplesNum = k * i;
    if (multiplesNum <= n) {
      multiples.push(multiplesNum);
    }
  }

  return multiples.reduce((a, b) => a + b, 0);
}
