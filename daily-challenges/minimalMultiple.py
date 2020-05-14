# Find the smallest multiple of the given number that's not less than a specified lower bound.


def minimalMultiple(divisor, lowerBound):
    for multiple in range(1, lowerBound+1):
        if (divisor * multiple) >= lowerBound:
            return divisor * multiple
