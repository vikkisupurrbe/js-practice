function productArray1(numbers){
  return numbers.map((currentNum, index) => {
    let subArr = numbers.filter(item => numbers.indexOf(item) !== index);
    // console.log(subArr);
    let productExceptSelf = subArr.reduce((product, item) => product * item);
    currentNum = productExceptSelf;
    // console.log(currentNum);
    return currentNum;
  })
}

console.log(productArray1([10, 5, 5]));


function productArray2(numbers){
  return numbers.map((currentNum, index) => {
    let subArr = numbers.filter((_, itemIndex) => itemIndex !== index);
    let productExceptSelf = subArr.reduce((product, item) => product * item);
    currentNum = productExceptSelf;
    return currentNum;
  })
}

console.log(productArray2([10, 5, 5]));

function productArray3(numbers){
  const totalProduct = numbers.reduce((product, num) => product * num);
  return numbers.map((num) => totalProduct / num);
}

console.log(productArray3([10, 5, 5]));