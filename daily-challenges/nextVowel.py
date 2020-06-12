# Given a single character, an English vowel; find the next vowel. Vowels are listed from alphabetical order: 'A', 'E', 'I', 'O', 'U'.

def nextVowel(vowel):
  vowels = 'AEIOU'
  if vowel == 'U':
    return 'A'
  index = vowels.index(vowel)
  return vowels[index+1]
