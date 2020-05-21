# Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

def firstNotRepeatingCharacter(s):
  map = {}
  for i in s:
    if i not in map:
      map[i] = 1
    else:
      map[i] = map[i] + 1
  for i, j in map.items():
    if j == 1:
      return i
  return '_'
