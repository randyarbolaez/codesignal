# One of your friends noticed that you could enumerate the alphabet and sum the letters of your name to get a number.

def bestFriendNames(name1, name2):
  name1Total = getTotalForName(name1)
  name2Total = getTotalForName(name2)

  return name1Total == name2Total

def getTotalForName(name):
  alphabet = 'abcdefghijklmnopqrstuvwxyz'
  
  name = name.lower()
  nameTotal = 0
  for i in name:
    if i == ' ':
      continue
    index = alphabet.index(i) + 1 
    nameTotal += index
  return nameTotal
