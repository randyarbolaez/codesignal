# Given an array a composed of distinct elements, find the next larger element for each element of the array, i.e. the first element to the right that is greater than this element, in the order in which they appear in the array, and return the results as a new array of the same length. If an element does not have a larger element to its right, put -1 in the appropriate cell of the result array.

def nextLarger(a):
  finalList = []
  for i in range(0,len(a)):
    for j in range(i+1,len(a)):
      print(a[i] < a[j],a[i],a[j])
      if a[i] < a[j]:
        finalList.append(a[j])
        break
    else:
      finalList.append(-1)
  return finalList
