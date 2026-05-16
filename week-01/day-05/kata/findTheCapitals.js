/*

Instructions

Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.
Example (Input --> Output)

"CodEWaRs" --> [0,3,4,6]

*/

function capitals(word) {
	// Write your code here
  let letters = word.split('');
  let result = [];
  for (let i = 0; i < letters.length; i++) {
    if (letters[i].toUpperCase() === letters[i]) {
      result.push(i);
    }
  }
  return result;
};

console.log(capitals("CodEWaRs" ));
console.log(capitals("aAbB"));
console.log(capitals("AAA"));