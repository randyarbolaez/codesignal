# Given a sentence, check whether it is a pangram or not.

def isPangram(sentence):
  sentence = sentence.lower()
  alphabet = 'abcdefghijklmnopqrstuvwxyz'
  hashMap = {}
  for i in sentence:
    if i in alphabet:
      if i not in hashMap:
        hashMap[i] = i
      else:
        continue
    else:
      continue
  return len(hashMap) >= 26
