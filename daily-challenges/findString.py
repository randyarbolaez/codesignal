# Your task it to find the number of occurrences of the findString in the mainString (occurrences may overlap).


def FindString(mainString, findString):
    totalOccurrences = 0
    for i in range(0, len(mainString)):
        if mainString[i:i+len(findString)] == findString:
            totalOccurrences += 1
    return totalOccurrences
