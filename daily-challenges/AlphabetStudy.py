# I've extracted all the words from the book, and converted them to lowercase. Now I need your help: given the letters Jeff knows and a word, determine if Jeff will be able to read the word, i.e. if all the letters in the word are familiar to him.

def AlphabetStudy(letter, word):
  for i in word:
    if i not in letter:
      return 'No'
  return 'Yes'
