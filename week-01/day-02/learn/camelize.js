/* 

Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.

Examples:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';

P.S. Hint: use split to split the string into an array, transform it and join back.

*/

function camelize(str) {
  let words = [];
  words = str.split("-") // [ 'background', 'app' ]

  for (let i = 0; i < words.length; i++) {
    if (i !== 0) {
      let spell = words[i].split(''); 
      spell[0] = spell[0].toUpperCase();
      let newWord = spell.join('');
      words[i] = newWord;
    }

  }

  return words.join('');
}

// Test
console.log(camelize("background-app")); // backgroundApp
console.log(camelize("list-style-image")); // listStyleImage
console.log(camelize("-webkit-transition")); // WebkitTransition