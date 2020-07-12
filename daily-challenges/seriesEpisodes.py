# This is your plan: On day i, you're going to watch some of the episodes with indices from l[i] to r[i] (both inclusive) and you have exactly freeTime[i] minutes to do so. You don't want to watch the same episode twice on one day, you want to watch each of the episodes that you start watching up until its end on the same day, and you want to spend all the free time that you have available watching the series. On how many days is it possible to meet all these requirements?

def seriesEpisodes(duration, l, r, freeTime):
  daysThatYouCanSpendAllFreeTimeWatchingSeries = 0
  
  for i in range(0,len(l)):
    if l[i] == r[i]:
      if duration[l[i]] == freeTime[i]: 
        daysThatYouCanSpendAllFreeTimeWatchingSeries += 1

    if duration[l[i]]+duration[r[i]]==freeTime[i]:
      daysThatYouCanSpendAllFreeTimeWatchingSeries += 1

  return daysThatYouCanSpendAllFreeTimeWatchingSeries
