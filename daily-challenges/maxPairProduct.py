# Given an array a, find the greatest number in a that is a product of two elements in a. If there are no two elements in a that can be multiplied to produce another element contained in a, return -1.

def maxPairProduct(a):
  products = []
  for i in range(len(a)):
    for j in a[i+1:]:
      if a[i] * j in a:
        products.append(a[i]*j)
  if len(products) == 0:
    products.append(-1)
  return sorted(products)[-1]
