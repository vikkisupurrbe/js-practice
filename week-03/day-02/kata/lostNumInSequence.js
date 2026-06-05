function findDeletedNumber(arr, mixArr) {
  let output = 0;
  arr.forEach((item) => {
    if (!mixArr.includes(item)) {
      output = item;
    }
  })
  return output;
}

console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]));