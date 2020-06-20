# Given an array array that contains only numbers in the range from 1 to array.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.

def firstDuplicateNumber(array):
  hashMap = {}
  
  for i in array:
    if i not in hashMap:
      hashMap[i] = i
    else:
      return i
  return -1

