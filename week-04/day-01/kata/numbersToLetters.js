function switcher(x) {
  const obj = Object.fromEntries(
    Array.from(
      { length: 26 }, (_, i) => [String.fromCharCode(97 + i), (26 - i).toString()]
    ));
    
  obj["!"] = "27";
  obj["?"] = "28";
  obj[" "] = "29";

  const charList = [];
  x.forEach(code => charList.push(Object.keys(obj).find(key => obj[key] === code)));
  return charList.join("");
}

console.log(switcher(
  ['24', '12', '23', '22', '4', '26', '9', '8']
  // expected "codewars" get "codewars"
));