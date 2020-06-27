# Given a non-negative integer number, remove all of its odd digits (if all of the digits are removed, return zero).

def noOddDigits(n):
  numToStr = str(n)
  numbersLeft = ''
  for num in numToStr:
    num = int(num)
    print(num, num % 2 == 0)
    if num % 2 == 0:
      numbersLeft += str(num)
  if len(numbersLeft) == 0:
    return 0
  return int(numbersLeft)
