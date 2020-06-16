# Sort the letters in the string s by the order they occur in the string t.

def sortByString(s, t):
  newString = ''
  for letter in t:
    if letter in s:
      s.count(letter)
      newString += letter * s.count(letter)
  return newString
