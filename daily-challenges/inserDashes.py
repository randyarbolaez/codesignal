# Transform a given sentence into a new one with dashes between each two consecutive letters.

def insertDashes(inputString):
  finalString = ''

  for i,j in zip(inputString,inputString[1:]):
    if not j.isalpha():
      finalString += i +' '
      continue
    if i.isalpha():
      finalString += i +'-'

  finalString += inputString[-1]
  return finalString