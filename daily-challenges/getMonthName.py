# Map the given integer to a month.

def getMonthName(mo):
  if mo == 1:
    return 'Jan'
  elif mo == 2:
    return 'Feb'
  elif mo == 3:
    return 'Mar'
  elif mo == 4:
    return 'Apr'
  elif mo == 5:
    return 'May'
  elif mo == 6:
    return 'Jun'
  elif mo == 7:
    return 'Jul'
  elif mo == 8:
    return 'Aug'
  elif mo == 9:
    return 'Sep'
  elif mo == 10:
    return 'Oct'
  elif mo == 11:
    return 'Nov'
  elif mo == 12:
    return 'Dec'
  else:
    return 'invalid month'
