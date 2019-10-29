// You are implementing your own HTML editor. To make it more comfortable for developers you would like to add an auto-completion feature to it.

function htmlEndTagByStartTag(startTag) {
  let elem = startTag.split(' ')[0].split('<')[1];

  if (elem.includes('>')) {
    elem = elem.split('>')[0];
    return `</${elem}>`;
  }

  return `</${elem}>`;
}
