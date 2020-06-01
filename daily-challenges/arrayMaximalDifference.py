# Given an array of integers, find the maximal difference among all possible pairs of its elements.

def arrayMaximalDifference(inputArray):
  differences = []
  for i in inputArray:
    for j in inputArray:
        differences.append(i-j)
  return max(differences)

