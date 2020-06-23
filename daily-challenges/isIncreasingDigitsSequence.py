# Call an integer an increasing digits sequence if its digits considered from left to right form a strictly increasing sequence.

def isIncreasingDigitsSequence(n):
  listOfNums = [int(i) for i in str(n)]
  
  for i in range(1,len(listOfNums)):
    if listOfNums[i-1] < listOfNums[i]:
      continue
    else:
      return False

  return True
