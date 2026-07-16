function maxGap (numbers){
  numbers.sort((a, b) => b - a);
  let l = 0;
  let r = 1;
  let maxGap = 0;
  while (l < r && r < numbers.length) {
    maxGap = Math.max(numbers[l] - numbers[r], maxGap);
    l++;
    r++;
  }
  return maxGap;
}

console.log(maxGap([13,10,2,9,5]));