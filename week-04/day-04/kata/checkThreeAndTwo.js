function checkThreeAndTwo(array) {
  const freq = {};
  array.forEach(item => freq[item] = freq[item] ? freq[item] + 1 : 1);
  const freqArr = Object.values(freq);
  return freqArr.every(num => num === 2 || num === 3);
}

console.log(checkThreeAndTwo(["a", "a", "a", "b", "b"]));
console.log(checkThreeAndTwo(["a", "b", "c", "b", "c"]));