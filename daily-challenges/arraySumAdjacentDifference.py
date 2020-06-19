# Given array of integers, find the sum of absolute differences of consecutive numbers.

def arraySumAdjacentDifference(inputArray):
  totalListOfInputs = []
  for i in range(1,len(inputArray)):
    if inputArray[i-1] - inputArray[i] < 0:
      totalListOfInputs.append((inputArray[i-1] - inputArray[i]) * - 1)  
    else:
      totalListOfInputs.append(inputArray[i-1] - inputArray[i])
  return sum(totalListOfInputs)
