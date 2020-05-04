# Determine if the given number is a power of some non-negative integer.

def isPower(n):
  for i in range(2,101):
    for j in range(2,1):
      if i ** j == n:
        return True
  return False
