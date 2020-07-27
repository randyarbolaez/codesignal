# For the give number n, find the number of trailing zeros in n!.

def NumberofZeros(n):
  trailingZeros = 0
  factorialNumber = str(factorial(n))
  for i in factorialNumber[::-1]:
    if i != '0':
      break
    else:
      trailingZeros += 1
  return trailingZeros

def factorial(number):
  answer = 1
  for i in range(2,number+1):
    answer *= i
  return answer
