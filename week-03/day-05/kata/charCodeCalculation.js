function calc(x){
  const charCodeList = x
    .split("")
    .map(char => char.charCodeAt(0));
  const codeSum = charCodeList.reduce((sum, code) => sum + code.toString(), ""); 
  const codeSumByDigit = codeSum
    .split("")
    .reduce((num, sum) => Number(num) + Number(sum));
  const codeSumReplaced = codeSum.split("").map(code => code === "7" ? code = 1 : code).join("");
  const codeSumReplacedByDigit = codeSumReplaced
    .split("")
    .reduce((num, sum) => Number(num) + Number(sum));
  return codeSumByDigit - codeSumReplacedByDigit;
}

console.log(calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'));