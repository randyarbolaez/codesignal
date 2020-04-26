# You are given a two-digit integer n. Return the sum of its digits.

def addTwoDigits(n):
  output = 0;
  for i in str(n):
    output = output + int(i)

  return output