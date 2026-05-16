// 1st attempt
function isSortedAndHow1(array) {
  let result = "";
  array.forEach((el, index) => {
    if(el <= array[index + 1]) {
      result = "yes, ascending";
    } else if (el >= array[index + 1]) {
      result = "yes, descending"
    } else {
      result = "no"
    }
  })
return result;
}

console.log(isSortedAndHow1([1, 2])); // expect "yes, ascending" get "no"
console.log(isSortedAndHow1([1, 2, 3, 4])); // expect "yes, ascending" get "no"
console.log(isSortedAndHow1([4, 3, 2, 1])); // expect "yes, descending" get "no"
console.log(isSortedAndHow1([1, 3, 2, 4])); // expect "no" get "no"

// 2nd attempt
function isSortedAndHow2(array) {
  let result = "";
  if (array.every((el, index) => index === 0 || el >= array[index - 1])) {
    result = "yes, ascending";
  } else if (array.every((el, index) => index === 0 || el <= array[index - 1])) {
    result = "yes, descending";
  } else {
    result = "no";
  }
  return result;
}

console.log(isSortedAndHow2([1, 2])); 
// expect "yes, ascending" get "yes, ascending"
console.log(isSortedAndHow2([1, 2, 3, 4])); 
// expect "yes, ascending" get "yes, ascending"
console.log(isSortedAndHow2([4, 3, 2, 1])); 
// expect "yes, descending" get yes, descending"
console.log(isSortedAndHow2([1, 3, 2, 4])); // expect "no" get "no"