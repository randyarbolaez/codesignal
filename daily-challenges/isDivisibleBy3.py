# A masked number is a string that consists of digits and one asterisk (*) that should be replaced by exactly one digit. Given a masked number find all the possible options to replace the asterisk with a digit to produce an integer divisible by 3.

def isDivisibleBy3(inputString):
  listOfNumbersDivisibleBy3 = []
  numberToReplaceAsterik = 0

  while numberToReplaceAsterik != 10:
    wholeNumber = int(inputString.replace("*", str(numberToReplaceAsterik)))
    
    if wholeNumber % 3 == 0:
      listOfNumbersDivisibleBy3.append(str(wholeNumber))
    
    numberToReplaceAsterik += 1
  return listOfNumbersDivisibleBy3
