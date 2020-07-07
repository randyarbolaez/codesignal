# Calculate the number of digits in n!, where n is given.

def fact_digits(n):
  answer = 1
  for i in range(2,n+1):
    answer *=  i
  return len(str(answer))
