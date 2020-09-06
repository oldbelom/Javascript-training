function wordPattern(word) {
  let text = word.split("");
  let finalArray = [];
  console.log(text);

  for (let i = 0; i < text.length; i++) {
    for (let k = 0; k < text.length; k++) {
      if (text[i] === text[k]) {
        finalArray.push(i - 1);
      }
    }
    finalArray.push(i);
  }

  return finalArray.join(".");
}

console.log(wordPattern("hello"));
