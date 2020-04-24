# You are given a string s that consists of only lowercase English letters. If vowels ('a', 'e', 'i', 'o', and 'u') are given a value of 1 and consonants are given a value of 2, return the sum of all of the letters in the input string.

def countVowelConsonant(s):
  count = 0
  vowelList = ['a','e','i','o','u']

  for i in s:
    if i in vowelList:
      count += 1
    else:
      count += 2

  return count;