# Find the reversed number from the given one.

def reverse_number(n):
  n = str(n)[::-1]
  finalN = ''
  if n[0] == '0':
    for integer in n:
      if integer == '0':
        continue
      else:
        finalN += integer
  else:
    finalN += n
  return int(finalN)
