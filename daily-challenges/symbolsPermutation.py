# Determine if it is possible to rearrange the characters in a string to obtain another string.

def symbolsPermutation(word1, word2):
  if len(word1) != len(word2):
    return False
    
  for i in word1:
    if i not in word2:
      return False
  return True
