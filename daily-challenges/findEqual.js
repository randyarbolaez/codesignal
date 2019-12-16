// Given unsorted array of integers, check if it contains at least two equal numbers.

function findEqual(sequence) {
  // for(let i = 0; i < sequence.length;i++){
  //   for(let j = 1; j < sequence.length;j++){
  //     if(sequence[i] === sequence[j]){
  //       return true;
  //     }
  //   }
  // }
  // return false;

  let obj = {};
  for (let i = 0; i < sequence.length; i++) {
    if (obj[sequence[i]] !== undefined) {
      return true;
    } else {
      obj[sequence[i]] = i;
    }
  }
  return false;
}
