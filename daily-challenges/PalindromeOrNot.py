# Find out if the given string is a palindrome or not. If s is a palindrome return "Yes", otherwise return "No".

def PalindromeOrNot(s):
  if s == s[::-1]:
    return 'Yes'
  return 'No'
