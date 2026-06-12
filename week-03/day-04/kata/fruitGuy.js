function removeRotten(bagOfFruits){
  let newBagOfFruits = [];
  bagOfFruits.forEach((fruit) => {
    if (fruit.includes("rotten")) {
      fruit = fruit.slice(6).toLowerCase();
    }
    newBagOfFruits.push(fruit);
  })
  return newBagOfFruits;
}

console.log(removeRotten(["apple","banana","rottenKiwi","rottenMelone","orange"]));
// expect [ 'apple', 'banana', 'kiwi', 'melone', 'orange' ] get [ 'apple', 'banana', 'kiwi', 'melone', 'orange' ]

function removeRottenButBetter(bagOfFruits){
  let newBagOfFruits = [];
  bagOfFruits.forEach((fruit) => {
    if (fruit.includes("rotten")) {
      fruit = fruit.replace("rotten", "").toLowerCase();
    }
    newBagOfFruits.push(fruit);
  })
  return newBagOfFruits;
}

console.log(removeRottenButBetter(["apple","banana","rottenKiwi","rottenMelone","orange"]));
// expect [ 'apple', 'banana', 'kiwi', 'melone', 'orange' ] get [ 'apple', 'banana', 'kiwi', 'melone', 'orange' ]