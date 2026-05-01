/*
Sum of odd numbers

Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...

Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8

My observation:
row 1: first element = 1  = 1 + 2*0
row 2: first element = 3  = 1 + 2*1
row 3: first element = 7  = 1 + 2*3
row 4: first element = 13 = 1 + 2*6
row 5: first element = 21 = 1 + 2*10

0 → 1  (+ 1)
1 → 3  (+ 2)
3 → 6  (+ 3)
6 → 10 (+ 4)

row 1, 0 row before, first element 1 + 2*0
row 2, 1 row before, first element 1 + 2*1
row 3, 2 rows before, first element 1 + 2*(1+2)
row 4, 3 rows before, first element 1 + 2*(1+2+3)

*/

function rowSumOddNumbers(n) {
  let multiplyer = 0;
  let firstNumber = 1

  for (let i = 0; i < n; i++) {
    multiplyer += i;
  }
  
  firstNumber = 1 + 2*multiplyer;

  let row = [];
  row.push(firstNumber);

  for (let j = 0; j < n - 1; j++) {
    let nextNumber = row[j] + 2
    row.push(nextNumber);
  }
  
  return rowSum = row.reduce((sum, num) => sum + num);
}

console.log(rowSumOddNumbers(42));

// Concise version with triangular number formula
function betterRowSumOddNumbers(n) {
  const firstNumber = 1 + 2 * (n * (n - 1)) / 2;
  const row = Array.from({ length: n }, (_, i) => firstNumber + 2 * i);
  return row.reduce((sum, num) => sum + num);
}

console.log(betterRowSumOddNumbers(42));