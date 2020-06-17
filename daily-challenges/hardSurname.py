# Given the surname of a player, determine how hard it is to pronounce. We assume that the difficulty of the surname is the maximum number of consecutive consonants in it.

def hardSurname(surname):
  surname = surname.lower()
  vowels = 'aeiou'
  consecutiveConsonants = 0
  listOfConsecutiveConsonants = []

  for i in surname:
    if i not in vowels:
      consecutiveConsonants += 1
    else:
      listOfConsecutiveConsonants.append(consecutiveConsonants)
      consecutiveConsonants = 0
  listOfConsecutiveConsonants.append(consecutiveConsonants)
  return max(listOfConsecutiveConsonants)
