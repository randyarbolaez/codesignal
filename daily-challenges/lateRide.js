// One night you go for a ride on your motorcycle. At 00:00 you start your engine, and the built-in timer automatically begins counting the length of your ride, in minutes. Off you go to explore the neighborhood.

function lateRide(n) {
  let arr = [];
  let decimalHours = n / 60;
  let decimalMinutes = (decimalHours - Math.floor(decimalHours)) * 60;

  let hours = Math.floor(decimalHours)
    .toString()
    .split("");
  let minutes = Math.round(decimalMinutes)
    .toString()
    .split("");

  hours = hours.map(Number).reduce((a, b) => a + b, 0);
  minutes = minutes.map(Number).reduce((a, b) => a + b, 0);

  arr.push(hours, minutes);

  return arr.reduce((a, b) => a + b, 0);
}
