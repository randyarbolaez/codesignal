# Given a positive integer n, calculate the sum of all the prime numbers from 1 to n, inclusive. Because this number may be very big, return it modulo 109 + 7 in your output.

def primesSum2(n):
  total = 0
  for i in range(2,n+1):
    for j in range(2,i):
      if (i % j) == 0:
        break
    else:
      total += i
  return total

