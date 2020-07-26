# Check if the given string is a correct time representation of the 24-hour clock.

def validTime(time):
  hours = int(time[:2])
  minutes = int(time[3:])
  return hours < 24 > hours and minutes < 60 > minutes
