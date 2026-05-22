/*
Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

    If the value is a multiple of 3: use the value "Fizz" instead
    If the value is a multiple of 5: use the value "Buzz" instead
    If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead

N will never be less than 1.

Method calling example:

fizzbuzz(3) -->  [1, 2, "Fizz"]
*/

// 1st attempt
function fizzbuzz1(n) {
  return Array.from({ length: n }, (value, index) => {
    let element = index + 1;
    return element =
      element % 3 === 0 && element % 5 === 0 ? "FizzBuzz" :
      element % 3 === 0 ? "Fizz" :
      element % 5 === 0 ? "Buzz" :
      element
  });
}

console.log(fizzbuzz1(16));

// 2nd attempt
function fizzbuzz2(n) {
  return Array.from({ length: n }, (_, index) => {
    const element = index + 1;

    return element % 3 === 0 && element % 5 === 0
      ? "FizzBuzz"
      : element % 3 === 0
      ? "Fizz"
      : element % 5 === 0
      ? "Buzz"
      : element;
  });
}

console.log(fizzbuzz2(16));