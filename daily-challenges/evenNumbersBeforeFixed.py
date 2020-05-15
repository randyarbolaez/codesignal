# Given array of integers sequence and some integer fixedElement, output the number of even values in sequence before the first occurrence of fixedElement or -1 if fixedElement is not contained in sequence.


def evenNumbersBeforeFixed(sequence, fixedElement):
    if fixedElement not in sequence:
        return -1

    totalNums = 0
    index = sequence.index(fixedElement)

    for i in range(0, index):
        if sequence[i] % 2 == 0:
            totalNums += 1
    return totalNums
