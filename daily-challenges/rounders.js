// We want to turn the given integer into a number that has only one non-zero digit using a tail rounding approach. This means that at each step we take the last non 0 digit of the number and round it to 0 or to 10. If it's less than 5 we round it to 0 if it's larger than or equal to 5 we round it to 10 (rounding to 10 means increasing the next significant digit by 1). The process stops immediately once there is only one non-zero digit left.

function rounders(n) {
  let nString = n.toString();

  let nLastNumber = n.toString();
  nLastNumber = Number(nLastNumber[nLastNumber.length - 1]);

  let nFirstNumber = n.toString();
  nFirstNumber = Number(nFirstNumber[0]);

  let zeroRepeated = "0".repeat(nString.length);

  if (nLastNumber >= 5) {
    nFirstNumberString = nFirstNumber + 1;
    nFirstNumberString = nFirstNumberString.toString();

    zeroRepeated.replace(zeroRepeated[0], nFirstNumberString);

    return Number(zeroRepeated.replace(zeroRepeated[0], nFirstNumberString));
  }

  zeroRepeated.replace(zeroRepeated[0], nFirstNumber);
  return Number(zeroRepeated.replace(zeroRepeated[0], nFirstNumber));
}
