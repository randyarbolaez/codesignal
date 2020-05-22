# Find the kth largest element in an unsorted array. This will be the kth largest element in sorted order, not the kth distinct element.

def kthLargestElement(nums, k):
  for i in range(1,len(nums)):
    key = nums[i]

    j = i -1
    while j >= 0 and key > nums[j]:
      nums[j+1] = nums[j]
      j -= 1
    nums[j+1] = key

  return nums[k-1]

