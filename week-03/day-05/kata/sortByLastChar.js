function last(x) {
  const wordsList = x.split(" ");
  /*
    [
      'man',  'i',
      'need', 'a',
      'taxi', 'up',
      'to',   'ubud'
    ]
  */

  const reverseList = wordsList.map(word => word = word.split("").reverse().join(""));
  reverseList.sort((wordA, wordB) => {
    if (wordA[0] === wordB[0]) {
      return reverseList.indexOf(wordA) - reverseList.indexOf(wordB);
    } 
      return wordA.localeCompare(wordB);
  })

  return reverseList.map(word => word = word.split("").reverse().join(""));
}

console.log(last('man i need a taxi up to ubud'))
console.log(last('what time are we climbing up the volcano'))
