# Two lines ax + by + c = 0 and a'x + b'y + c' = 0 are parallel if and only if a * b' = b * a'

def parallelLines(line1, line2):
  if line1[0] * line2[1] == line1[1] * line2[0]:
    return True
  else:
    return False


