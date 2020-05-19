# Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.


def deleteDigit(n):
    nums = []
    n = str(n)
    for i in range(0, len(n)):
        total = ''
        for j in range(0, len(n)):
            if(i == j):
                continue
            else:
                total += n[j]
        nums.append(int(total))
    return max(nums)
