// Once Mary heard a famous song, and a line from it stuck in her head. That line was "Will you still love me when I'm no longer young and beautiful?". Mary believes that a person is loved if and only if he/she is both young and beautiful, but this is quite a depressing thought, so she wants to put her belief to the test.

function willYou(young, beautiful, loved) {
  //   if(young && beautiful && loved){
  //     return false;
  //   }

  //   if(young && beautiful && !loved){
  //     return true;
  //   }

  //   if(young && !beautiful && !loved){
  //     return false;
  //   }

  //   if(young || beautiful && loved){
  //     return true;
  //   }

  //   if(!young && !beautiful && loved){
  //     return true;
  //   }

  return loved !== (young && beautiful);
}
