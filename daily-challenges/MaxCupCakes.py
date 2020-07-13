# Your task it to find the quality of the Kth cupcake after the cupcakes from the list P are removed from the box.

def MaxCupCakes(N, P, K):
  cupcakeQuality = []
  for i in range(1,N+1):
    cupcakeQuality.append(i)
  for i in P:
    cupcakeQuality.remove(i)
  if len(cupcakeQuality) < K-1:
    return -1
  return cupcakeQuality[K-1]
