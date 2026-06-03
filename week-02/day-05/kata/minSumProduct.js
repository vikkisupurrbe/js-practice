function minSum1(arr) {
  const arrToProcess = [...arr];
  let minSumProduct = 0;
  
  while (arrToProcess.length > 0) {
    let min = Math.min(...arrToProcess);
    let max = Math.max(...arrToProcess);
    
    let indexMin = arrToProcess.indexOf(min);   
    let indexMax = arrToProcess.indexOf(max);
    
    minSumProduct += min * max;
    
    arrToProcess.splice(indexMin, 1); 
    // → array shifts → what was at index 4 is now at index 3
    arrToProcess.splice(indexMax, 1);
  }
  
  return minSumProduct;
}

console.log(minSum1([5,4,2,3])); // expected 22, get 22
console.log(minSum1([12,6,10,26,3,24])); // expected 342, get 1326

function minSum2(arr) {
  const arrToProcess = [...arr];
  let minSumProduct = 0;
  
  while (arrToProcess.length > 0) {
    let min = Math.min(...arrToProcess);
    let max = Math.max(...arrToProcess);
    
    let indexMin = arrToProcess.indexOf(min);   
    let indexMax = arrToProcess.indexOf(max);
    
    minSumProduct += min * max;
    
    arrToProcess.splice(indexMin, 1);
    if (indexMax > indexMin) indexMax--; // shift left by 1 after removal
    arrToProcess.splice(indexMax, 1);
  }
  
  return minSumProduct;
}

console.log(minSum2([5,4,2,3])); // expected 22, get 22
console.log(minSum2([12,6,10,26,3,24])); // expected 342, get 342


function minSum3 (arr) {
  arr.sort((a, b) => a - b)
  let l = 0;
  let r = arr.length - 1;
  let minSumProduct = 0;

  while (l < r) {
    minSumProduct += arr[l] * arr[r];
    l++;
    r--;
  }

  return minSumProduct;
}

console.log(minSum3([5,4,2,3])); // expected 22, get 22
console.log(minSum3([12,6,10,26,3,24])); // expected 342, get 342