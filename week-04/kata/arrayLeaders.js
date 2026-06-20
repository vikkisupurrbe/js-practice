function arrayLeaders(numbers){
  let l = 0;
  let r = 1;
  const result = [];
  
  while (r < numbers.length) {
    let rightSideSum = numbers
      .slice(r, numbers.length)
      .reduce((sum, num) => sum + num);
    console.log(l, r, rightSideSum);
    if (numbers[l] > rightSideSum) {
      result.push(numbers[l]);
    }
    console.log(result);
    l++;
    r++;

    if (l === numbers.length - 1) {
      if (numbers[l] > 0) {
        result.push(numbers[l]);
      }
    }
  }

  return result;
}

console.log(arrayLeaders([1,2,3,4,0]));
console.log(arrayLeaders([16,17,4,3,5,2]));