# Given the sentence your professor wants you to test, return true if it's considered to be a palindrome by your professor, and false otherwise.

def isSentencePalindrome(sentence):
  characters = removeAllNonAlphaCharacters(sentence)
  return characters == characters[::-1]


def removeAllNonAlphaCharacters(sen):
  alphaOnlyCharacter = ''
  for i in sen:
    if i.isalpha() or i == '':
      alphaOnlyCharacter += i.lower()
  return alphaOnlyCharacter
