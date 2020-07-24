# Find the first character that appears more than 1 time in the given string and return all appearances of this character. If no character appears in the string more than once, return "".

def FindTheSame(s):
  allOccurrenceOfTheCharacter = ''
  sameLetter = ''
  for i in range(0,len(s)):
    for j in range(i+1,len(s)):
      if s[i] == s[j]:
        sameLetter += s[j]
        break
    if len(sameLetter) != 0:
      break
  
  for i in s:
    if i == sameLetter:
      allOccurrenceOfTheCharacter += i
  return allOccurrenceOfTheCharacter
