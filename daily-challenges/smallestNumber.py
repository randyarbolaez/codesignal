# The algorithm should return the smallest non-negative integer of N digits length.

def smallestNumber(n):
  i = 0
  while i < 100000000:
    if n == len(str(i)):
      return i
    i+= 1

