// 1st attempt
function sumOfMinimums(arr) {
  let sortedSubArr = [];
  for (let subArr of arr) {
    sortedSubArr.push(subArr.sort((a, b) => (a - b))); // .sort mutates the original array, and sorting is O(nlogn)
  }
  const sumMin = sortedSubArr.reduce((sum, item) => sum + item[0], 0)
  return sumMin;
}

console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]])); // expect 9 get 9

// 2nd attempt
// function sumOfMinimumsButBetter(arr) {
//   return arr.reduce((sum, subArr) => sum + Math.min(subArr), 0);
// }

// console.log(sumOfMinimumsButBetter([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]])); // expected 9 get NaN

/*
explanation:

Math.min expects individual numbers as separate arguments, not an array. The spread ...subArr fixes this by unpacking the array into individual arguments. It's the same as calling Math.min with each element listed separately, which is what the function expects.

*/

// 3rd attempt
function sumOfMinimumsButBetter(arr) {
  return arr.reduce((sum, subArr) => sum + Math.min(...subArr), 0);
}

console.log(sumOfMinimumsButBetter([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]])); // expected 9 get 9