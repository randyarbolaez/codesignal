# Find the nth fibonacci number, and return it raised to the power of n. As the result can be very large, return it as a string.


def fibAt(n):
    x = 0
    fib = [1, 1]
    while x <= n**n:
        x = fib[-2] + fib[-1]
        fib.append(x)
    return str(fib[n-1] ** n)
