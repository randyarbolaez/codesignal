# Find the smallest integer not less than the given limit which is divisible by at least one integer from the given array.

def firstMultiple2(divisors, start):
  for i in range(start, 1000):
    divisor = 0
    while divisor != len(divisors):
      if i % divisors[divisor] == 0:
        return i
      divisor += 1
