function maxTriSum(numbers){
  const set = new Set(numbers);
  sortedArr = Array.from(set).sort((a, b) => a - b);
  return sortedArr.at(-1) + sortedArr.at(-2) + sortedArr.at(-3);
}

console.log(maxTriSum([2,9,13,10,5,2,9,5]));