// Given array of integers, remove each kth element from it.

function extractEachKth(inputArray, k) {
  // let ogK = k;

  // return inputArray.filter(input => {
  //   if(input !== inputArray[k - 1]){
  //     return input
  //   }
  //   k += ogK
  // })

  return inputArray.filter((input, i) => {
    return (i + 1) % k != 0;
  });
}
