# Count the number of digits which appear in a string.

def CountDigits(string):
  totalNumberOfDigits = 0
  for letterOrNumber in string:
    if letterOrNumber.isnumeric():
      totalNumberOfDigits += 1
    else:
      continue
  return totalNumberOfDigits
