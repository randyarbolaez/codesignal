# Given an array of integers, we need to fill in the "holes" such that it contains all the integers from some range.


def makeArrayConsecutive(sequence):
    numbersThatAreNotInTheSequence = []
    sequence = sorted(sequence)
    for i in range(sequence[0], sequence[-1]):
        if i not in sequence:
            numbersThatAreNotInTheSequence.append(i)
    return numbersThatAreNotInTheSequence
