#You are given number T. This number is prefix of some number S, such that S is a power of two. Your task to find the minimum number K, such that 2K = S, or return -1 the answer doesn't exist.

def PowerOfTwo(T):
  lengthOfT = int(len(str(T)))
  for i in range(1,T**2):
    if str(T) in str(2**i)[:lengthOfT]:
      return i
  return -1
