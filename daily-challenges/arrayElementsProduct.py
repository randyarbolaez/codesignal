# Given an array of integers, find the product of its elements.

def arrayElementsProduct(inputArray):
  total = 1 
  for i in inputArray:
    total *= i
  return total
