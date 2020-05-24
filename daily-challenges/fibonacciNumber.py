# Given an integer index n, find the nth Fibonacci number. 

def fibonacciNumber(n):
  fib = []
  i = 0

  fib.append(0)
  fib.append(1)
  
  while i != n:
    print(i)
    total = fib[len(fib)- 2] + fib[len(fib) - 1]
    fib.append(total)
    i += 1
    
  return fib[n]

