/*

Build a word frequency counter: input a paragraph → output each word + count, sorted by frequency using Map. 

Thinking:
Map key is the word
Map value is the frequency

Steps:
- Process the paragraph into words, remove punctuation, normalize words to all lowercase.
- Each time see a new word, set new word { word: 1 }
- The word is seen again, increment word count by 1, { word: 2 }
*/

function freqCounter(paragraph) {
  // normalize words
  const normalWords = paragraph
    .split(' ')
    .map(word => word
      .replace(/[^a-zA-Z]/g, '')
      .toLowerCase());

  console.log(normalWords);

  let map = new Map();

  for (const normalWord of normalWords) {
    let freq = map.get(normalWord) || 0;
    map.set(normalWord, freq + 1);
  }

  return map;
}

const paragraph = 'The fast runner ran fast on the fast track, but the fast finish was fast becoming just another fast memory. Day after day, she trained after sunset, after her studies, and after her chores, always looking after her health to ensure she stayed the fastest. She ran for glory, she ran for joy, and she ran for the thrill of the race.'

console.log(freqCounter(paragraph));