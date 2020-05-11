# Given an integer, find its kth digit.


def kthDigit(n, k):
    if k > len(str(n)):
        return -1
    return int(str(n)[k-1])
