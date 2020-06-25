# Given array of integers, check whether each integer, that occurs in it, is contained there the same number of times as any other integer from the given array.

def checkEqualFrequency(inputArray):
  hashMap = {}
  for i in inputArray:
    if i not in hashMap:
      hashMap[i] = 1
    else:
      hashMap[i] += 1

  return len(set(hashMap.values())) <= 1
