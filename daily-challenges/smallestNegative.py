# Given an array of numbers, return the smallest negative number in it as a string. If all numbers are greater than or equal 0, return "NOT_FOUND" instead.

def smallestNegative(A):
  A.sort()
  if A[0] > -1:
    return 'NOT_FOUND' 
  else:
    return str(A[0])
