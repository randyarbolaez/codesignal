# Write a function that returns a framed wish as an array of strings, where each string is a word of the wish (including any punctuation marks that might come right after it) with some spaces added to make the frame rectangular. Note that there should be exactly 1 whitespace character (' ') before each word, and at least 1 after.

def happyNewYear(wish):
  listOfWords = turnSentenceIntoListOfWords(wish)
  longest_word = len(max(listOfWords, key=len)) + 2
  listOfWords.insert(0,'*' * longest_word)
  listOfWords.append('*' * longest_word)
  for word in range(1,len(listOfWords) - 1):
    listOfWords[word] = listOfWords[word]+ ' ' * (longest_word-len(listOfWords[word]) -1) + '*'
  return listOfWords

def turnSentenceIntoListOfWords(sentence):
  listOfWords = []
  lettersBeforeSpace = '* '
  for i in sentence:
    if i == ' ':
      listOfWords.append(lettersBeforeSpace)
      lettersBeforeSpace = '* '
    else:
      lettersBeforeSpace += i
  listOfWords.append(lettersBeforeSpace)
  return listOfWords
