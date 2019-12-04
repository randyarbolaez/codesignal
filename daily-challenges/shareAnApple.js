// You have a apples, and your friend has b apples. You will be happy if - and only if - you both have the same number of apples.

function shareAnApple(a, b) {
  a -= 1;
  b += 1;
  return a == b;
}
