// Remove all characters from a given string that appear more than once in it.

function removeDuplicateCharacters(str) {
  // let letters = str.split('');
  // let arrOfNoDuplicates=[];
  // for(let i =0;i< letters.length;i++){
  //   if(str.indexOf(letters[i]) == str.lastIndexOf(letters[i])){
  //     arrOfNoDuplicates.push(letters[i])
  //   }
  // }
  // return arrOfNoDuplicates.join('');

  let letters = str.split("");
  for (let i = 0; i < letters.length; i++) {
    if (str.indexOf(letters[i]) == str.lastIndexOf(letters[i])) {
      continue;
    } else {
      delete letters[i];
    }
  }
  return letters.join("");
}
