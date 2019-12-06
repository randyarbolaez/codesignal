// Given timestamps time1 and time2, return true if time1 is strictly earlier than time2 and false otherwise.

function isEarlier(time1, time2) {
  const [hoursOne, minsOne] = time1;
  const [hoursTwo, minsTwo] = time2;

  if (hoursOne > hoursTwo) {
    return false;
  }

  if (hoursOne === hoursTwo) {
    if (hoursOne === hoursTwo && minsOne === minsTwo) {
      return false;
    }
    if (minsOne > minsTwo) {
      return false;
    }
  }

  return true;
}
