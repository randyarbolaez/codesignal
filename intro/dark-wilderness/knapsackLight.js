// You found two items in a treasure chest! The first item weighs weight1 and is worth value1, and the second item weighs weight2 and is worth value2. What is the total maximum value of the items you can take with you, assuming that your max weight capacity is maxW and you can't come back for the items later?

function knapsackLight(value1, weight1, value2, weight2, maxW) {
  if (weight1 + weight2 <= maxW) {
    return value1 + value2;
  }

  if (weight1 > maxW && weight2 > maxW) {
    return 0;
  }

  if (value1 >= value2) {
    return weight1 <= maxW ? value1 : value2;
  }

  if (value2 >= value1) {
    return weight2 <= maxW ? value2 : value1;
  }
}
