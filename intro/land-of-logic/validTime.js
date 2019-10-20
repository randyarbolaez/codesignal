// Check if the given string is a correct time representation of the 24-hour clock.

function validTime(time) {
  let splitTime = time.split(':');

  if (splitTime[0] < 24 && splitTime[1] < 60) {
    return true;
  }
  return false;
}
