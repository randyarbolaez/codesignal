# Given a non-negative integer n, your task is to calculate the sum of its non-prime divisors.

def sumDivisors(number):
  allDivisors = []
  for i in range(1,number+1):
    if (number/i).is_integer():
      if not isPrime(i):
        allDivisors.append(i)
  total = sum(allDivisors)
  return total + 1

def isPrime(n):
  for i in range(2,n):
    if (n % i) == 0:
      return False
  else:
    return True
