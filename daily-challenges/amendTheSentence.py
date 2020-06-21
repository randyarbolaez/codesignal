# You have been given a string s, which is supposed to be a sentence. However, someone forgot to put spaces between the different words, and for some reason they capitalized the first letter of every word. Return the sentence after making the following amendments: Put a single space between the words. Convert the uppercase letters to lowercase.

def amendTheSentence(s):
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  sentenceWithSpaces = ''
  for letter in range(len(s)):
    if letter == 0 and s[letter] in alphabet:
      sentenceWithSpaces += s[letter].lower()
    elif s[letter] in alphabet:
      sentenceWithSpaces += ' ' + s[letter].lower()
    else:
      sentenceWithSpaces += s[letter]
  return sentenceWithSpaces
