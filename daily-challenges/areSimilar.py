# Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays. Given two arrays a and b, check whether they are similar.

def areSimilar(a, b):
  differences = 0
  if sorted(a) != sorted(b):
    return False

  for num in range(0,len(a)):
    if a[num] != b[num]:
      differences += 1
  
  return differences <= 2

