// Given values experience, threshold and reward, check if you reach the next level after killing the monster.

function reachNextLevel(experience, threshold, reward) {
  return experience + reward >= threshold;
}
