const binaryArrayToNumber1 = arr => {

  /*
  
  0001 => 1
  0010 => 2
  0011 => 3
  0100 => 4
  0101 => 5
  0110 => 6
  0111 => 7
  1000 => 8
  1001 => 9
  
  Given binary array:
  [0, 1, 1, 0]
  index:
  [0,   1,   2,   3]
  [2^3, 2^2, 2^1, 2^0]
    
  */
 
  const n = arr.length;
  let result = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] === 1) {
      result += 2 ** (n - 1 - i);
    }
  }

  return result;
};

console.log(binaryArrayToNumber1([0, 0, 1, 0])); // expected 2, get 0
console.log(binaryArrayToNumber1([1, 0, 0, 1])); // expected 9, get 9

function binaryArrayToNumber2(arr) {
  const n = arr.length;
  let i = 0;
  let result = 0;

  while (i < n) {
    if (arr[i] === 1) {
      result += 2 ** (n - 1 - i);
    }
    i++;
  }

  return result;
}

console.log(binaryArrayToNumber2([0, 0, 1, 0])); // expected 2, get 0
console.log(binaryArrayToNumber2([1, 0, 0, 1])); // expected 9, get 9
