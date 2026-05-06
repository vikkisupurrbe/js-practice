/*

The museum of incredibly dull things

The museum of incredibly dull things wants to get rid of some exhibits. Miriam, the interior architect, comes up with a plan to remove the most boring exhibits. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibits, she's off to an important fair, so she asks you to write a program that tells her the ratings of the exhibits after removing the lowest one. Fair enough.
Task

Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.
Examples

* Input: [1,2,3,4,5], output = [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]

*/

function removeSmallest(numbers) {
  if (numbers.length === 0) return []; // a single element array is covered
  
  // replace the for loop with the following
  const min = Math.min(...numbers);
  const index = numbers.indexOf(min); 

  return numbers.filter((_, position) => position !== index); // replace unused parameters with _ to signal intentionally that it's not used
}

console.log(removeSmallest([1, 2, 3, 4, 5])); // expected [2, 3, 4, 5] got [2, 3, 4, 5]
console.log(removeSmallest([5, 3, 2, 1, 4])); // expected [5, 3, 2, 4] got [5, 3, 2, 4]
console.log(removeSmallest([2, 1, 2])); // expected [2, 2] got [2, 2]
console.log(removeSmallest([2, 2, 1, 2, 1])) // expected [2, 2, 2, 1] got [2, 2, 2, 1]