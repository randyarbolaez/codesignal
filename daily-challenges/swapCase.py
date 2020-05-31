# Change the capitalization of all letters in a given string.

def swapCase(text):
  originalLen = len(text)
  for i in text:
    if i.isupper():
      text += i.lower()
    else:
      text += i.upper()
  return text[originalLen:]
