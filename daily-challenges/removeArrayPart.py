# Remove a part of a given array between given 0-based indexes l and r (inclusive).

def removeArrayPart(inputArray, l, r):
  inputsThatAreToBeRemoved = []
  for i in range(0,len(inputArray)):
    if i in range(l,r+1):
      continue
    else:
      inputsThatAreToBeRemoved.append(inputArray[i])
  return inputsThatAreToBeRemoved
