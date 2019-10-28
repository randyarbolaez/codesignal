// Using the bike's timer, calculate the current time. Return an answer as the sum of digits that the digital timer in the format hh:mm would show.

function lateRide(n) {
  let arr = [];
  let decimalHours = n / 60;
  let decimalMinutes = (decimalHours - Math.floor(decimalHours)) * 60;

  let hours = Math.floor(decimalHours)
    .toString()
    .split('');
  let minutes = Math.round(decimalMinutes)
    .toString()
    .split('');

  hours = hours.map(Number).reduce((a, b) => a + b, 0);
  minutes = minutes.map(Number).reduce((a, b) => a + b, 0);

  arr.push(hours, minutes);

  return arr.reduce((a, b) => a + b, 0);
}
