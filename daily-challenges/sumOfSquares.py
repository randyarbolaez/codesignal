# Find the sum of squares of all integers from 1 up to and including given N.

def sumOfSquares(n):
  total = 0
  for i in range(1,n+1):
    total = total + (i ** 2)
  return total
