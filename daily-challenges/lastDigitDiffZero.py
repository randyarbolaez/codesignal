# Find the last digit of n!(factorial), which is different from zero.

def lastDigitDiffZero(n):
  total = 1
  i = 1
  while i != n+1:
    total *= i
    i += 1

  totalStrVersionReversed = str(total)[::-1]

  for num in totalStrVersionReversed:
    num = int(num)
    if num == 0:
      continue
    else:
      return num
