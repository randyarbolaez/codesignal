# Given array of integers, find its mode.

def arrayMode(sequence):
  hashMap = {}

  for i in sequence:
    if hashMap.get(i) == None:
      hashMap[i] = 1
    else:
      hashMap[i] += 1
  return sorted(hashMap, key=hashMap.get)[-1]

