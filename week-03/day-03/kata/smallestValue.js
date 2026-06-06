function min(arr, toReturn) { 
  const sortedArr = [...arr].sort((a, b) => a - b);
  if (toReturn === "value") {
    return sortedArr[0];
  } else {
    return arr.indexOf(sortedArr[0]);
  }
}

console.log(min([500,250,750,5000,1000,230], 'value'));
console.log(min([500,250,750,5000,1000,230], 'index'));
