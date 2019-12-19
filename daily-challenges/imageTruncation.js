// One of the thresholding operations applied to images is truncation. Consider each pixel of some image one by one. If the intensity of a pixel is higher than threshold then it is set to threshold. Otherwise, it isn't changed.

function imageTruncation(image, threshold) {
  let arr = [];
  for (let elem of image) {
    for (let input of elem) {
      if (input >= threshold) {
        elem.splice(elem.indexOf(input), 1, threshold);
      }
    }
    arr.push(elem);
  }
  return arr;
}
