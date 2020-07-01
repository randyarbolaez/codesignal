# For 1 ÷ n, return the dth digit after the decimal place.

def reciprocal(n, d):
  fullStrNum = str(1/n)
  if d > len(fullStrNum):
    return 0
  else:
    return int(fullStrNum.split('.')[1][d-1])
