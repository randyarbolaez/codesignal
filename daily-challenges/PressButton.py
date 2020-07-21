# Someone has pressed the button n times. Find the current number the button has.

def PressButton(s, n):
  n = int(n)
  i = 0
  finalS = s
  while i != n:
    finalS = state = 1 if finalS == 0 else 0
    i+=1
  return finalS
