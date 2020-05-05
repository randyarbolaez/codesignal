# Given the angle measure, find its type. Here's how different angles are called:

def angleType(measure):
  if measure < 90:
    return 'acute'
  elif measure == 90:
    return 'right'
  elif measure > 90 and measure <= 180:
    return 'obtuse'
  elif measure == 180:
    return 'straight'