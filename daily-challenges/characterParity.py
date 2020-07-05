# Given a character, check if it represents an odd digit, an even digit or not a digit at all.

def characterParity(symbol):
  if symbol.isdigit():
    if int(symbol) % 2 == 0:
      return 'even'
    else:
      return 'odd'
  else:
    return 'not a digit'
