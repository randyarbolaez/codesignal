# Reverse the order of words in a given string sentence. You can assume that sentence does not have any leading, trailing or repeating spaces.

def reverseSentence(sentence):
  words = sentence.split(' ')
  words.reverse()
  finalSentence = ' '.join(words)
  return finalSentence
