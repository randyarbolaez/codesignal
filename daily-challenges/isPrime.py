# Implement a function that determines if a given positive integer is a prime or not.

def isPrime(n):
  for i in range(2,n):
    if (n % i) == 0:
      return False
  else:
    return True

