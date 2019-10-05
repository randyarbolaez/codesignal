// Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

function areSimilar(a, b) {
  let counter = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      counter++;
    }
  }

  if (counter < 3) {
    let arr1 = a.sort((a, b) => a - b);
    let arr2 = b.sort((a, b) => a - b);

    arr1 = arr1.join('');
    arr2 = arr2.join('');

    return arr1 === arr2;
  }
  return false;
}
