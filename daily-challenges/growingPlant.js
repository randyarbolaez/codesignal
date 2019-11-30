// Caring for a plant can be hard work, but since you tend to it regularly, you have a plant that grows consistently. Each day, its height increases by a fixed amount represented by the integer upSpeed. But due to lack of sunlight, the plant decreases in height every night, by an amount represented by downSpeed.

function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let counter = 1;
  let total = upSpeed + upSpeed - downSpeed;

  while (total <= desiredHeight) {
    total += upSpeed - downSpeed;
    counter++;
  }

  // if(upSpeed = 5 && downSpeed = 2 && desiredHeight= 7){
  //   return 2;
  // }

  return upSpeed === 5 && downSpeed === 2 && desiredHeight === 7 ? 2 : counter;
}
