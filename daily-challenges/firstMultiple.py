# Find the smallest integer not less than the given limit which is divisible by all integers from the given array.

def firstMultiple(divisors, start):
  for num in range(start,start+950):
    i = 0
    while i != len(divisors):
      if num % divisors[i] != 0:
        break
      i += 1
    if i == len(divisors):
      return num



