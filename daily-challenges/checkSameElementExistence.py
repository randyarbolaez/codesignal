# Given two sorted arrays of integers, check if there is at least one element which occurs in both arrays.

def checkSameElementExistence(arr1, arr2):
  for i in range(0,len(arr1)):
    if arr1[i] in arr2:
      return True
  return False

