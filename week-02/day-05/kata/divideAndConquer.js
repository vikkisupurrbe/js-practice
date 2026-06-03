function divCon(x){
  let numberTotal = 0;
  let stringTotal = 0;
  x.forEach((item) => {
    console.log(typeof item);
    if (typeof item === "number") {
      numberTotal += item;
      console.log(numberTotal);
    }
    
    if (typeof item === "string") {
      stringTotal += Number(item);
      console.log(stringTotal);
    }
  })
  return numberTotal - stringTotal;
}

console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7])) // expect 14 get 14