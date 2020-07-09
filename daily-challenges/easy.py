# Given array of integers h, find the sum of its elements. If this value is divided by the length of h, return true, otherwise return false.

def easy(h):
  total = 0
  for i in h:
    total += i
  return total % len(h) == 0
