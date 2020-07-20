# Given number N, return the total number of digits written.

def CountingDigits(N):
  allDigits = ''
  for digit in range(1,N+1):
    allDigits += str(digit)
  return len(allDigits)
