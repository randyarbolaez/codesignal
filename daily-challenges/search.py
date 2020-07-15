# Given an array of positive integers and a search element x. Return the first index of x in the array (as a string). if x is in not in the array, return "Not found"

def search(a, x):
  for i in a:
    if i == x:
      return str(a.index(x))
  return 'Not found'
