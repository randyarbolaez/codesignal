# Given an array of integers, return true if the average of its elements is an integer and false otherwise.

def integerAverage(inputArray):
  total = 0
  for integer in inputArray:
    total += integer
  return checkIfIntegerIsFloat(total / len(inputArray))

def checkIfIntegerIsFloat(integer):
  integer = str(integer)
  return len(integer) == 3
