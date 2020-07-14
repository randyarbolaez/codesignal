# Find the total number of times digit 4 occurs in the range [0,n).

def Count4s(n):
  howMany4s = 0
  for i in range(0,n):
    if str(4) in str(i):
      howMany4s += 1
  return howMany4s
