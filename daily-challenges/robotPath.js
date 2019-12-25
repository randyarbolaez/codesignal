// Consider a robot standing on a 2 - dimensional grid at point(0, 0).It follows a sequence of instructions.

function robotPath(instructions, bound) {
  let coords = [0, 0];

  for (let input of instructions.split("")) {
    switch (input) {
      case "L":
        if (coords[0] > -bound) {
          coords[0]--;
        }
        break;
      case "R":
        if (coords[0] < bound) {
          coords[0]++;
        }
        break;
      case "U":
        if (coords[1] < bound) {
          coords[1]++;
        }
        break;
      case "D":
        if (coords[1] > -bound) {
          coords[1]--;
        }
        break;
    }
  }
  return coords;
}
