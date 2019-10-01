// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

function makeArrayConsecutive2(statues) {
  const largestInteger = Math.max(...statues);
  let smallestInteger = Math.min(...statues);
  let i = 0;
  let stepsNeeded = 0;

  while (smallestInteger <= largestInteger) {
    statues.sort(function(a, b) {
      return a - b;
    });
    if (smallestInteger !== statues[i]) {
      statues.push(smallestInteger);
      stepsNeeded++;
    }
    smallestInteger++;
    i++;
  }
  return stepsNeeded;
}
