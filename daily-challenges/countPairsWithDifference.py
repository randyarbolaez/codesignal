# Given an array a of positive integers, find the number of pairs of integers for which the difference between the two numbers is equal to a given number k. Since the number of pairs could be quite large, take it modulo 109 + 7 for your output.

def countPairsWithDifference(k, a):
  pairs = 0
  for i in a:
    for j in a:
      if i - j == k:
        pairs+=1
  return pairs