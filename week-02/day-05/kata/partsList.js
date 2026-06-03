function partlist(arr) {
  // 0, 1, 2, 3, 4
  // 0,     1+2+3+4
  // 0+1,     2+3+4
  // 0+1+2,     3+4
  // 0+1+2+3,     4
  const output = [];
  for (let i = 1; i < arr.length; i++) {
    const arrCopy = [...arr];
    const arr1 = arrCopy.splice(0, i).join(" ");
    const arr2 = arrCopy.join(" ");
    output.push([arr1, arr2]);
  }
  return output;
}

console.log(partlist(["I", "wish", "I", "hadn't", "come"]))