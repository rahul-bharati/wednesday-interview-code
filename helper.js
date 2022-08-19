const chunkMessage = (text) => {
  const chunkedMessages = [];
  let arrWords = text.split(" ");
  let subStr = arrWords[0];
  for (let i = 1; i < arrWords.length; i++) {
    let word = arrWords[i];
    if (subStr.length + word.length + 1 <= 50) {
      subStr = subStr + " " + word;
    } else {
      chunkedMessages.push(subStr);
      subStr = word;
    }
  }
  if (subStr.length) chunkedMessages.push(subStr);
  return chunkedMessages;
};

module.exports = {
  chunkMessage,
};
