# Given array of integer, find the number of even numbers that appear before the first odd one.

def CountEvenNumbers(array):
  evenNumbersBeforeOdd = 0
  for i in array:
    if i % 2 == 0:
      evenNumbersBeforeOdd += 1
    else:
      break
  return evenNumbersBeforeOdd
