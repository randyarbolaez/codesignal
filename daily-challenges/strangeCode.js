// You have found a machine which, when fed with two numbers s and e, produces a strange code consisting of the letters a and b. The machine seems to be using the following algorithm.

function strangeCode(s, e) {
  let str = "";

  while (s < e - 1) {
    if (str[str.length - 1] == "a") {
      str += "b";
    } else {
      str += "a";
    }
    s++;
    e--;
  }
  return str;
}
