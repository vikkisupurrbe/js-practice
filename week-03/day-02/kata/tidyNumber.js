function tidyNumber(n){
  const str = n.toString();
  const arr = str.split("");
  const numArr = arr
    .map(item => Number(item))
    .sort((a, b) => a - b);
  const sortedNum = numArr.join("");
  return sortedNum == n;
}

console.log(tidyNumber(9672));