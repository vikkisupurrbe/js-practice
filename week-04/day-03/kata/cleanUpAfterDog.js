function crap1(garden, bags, cap){
  let output = 0;
  let dogFound = false;

  garden.forEach((row) => {
    if (row.includes("D")) dogFound = true;
    
    row.forEach((cell) => {
      if (cell === "@") output += 1;
    })
  })
  
  if (dogFound) return "Dog!!";
  
  if (output <= bags * cap) {
    return "Clean";
  } else {
    return "Cr@p";
  }
}

console.log(
  crap1([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 2, 2)
);
// expected 'Clean' get 'Clean'


function crap2(garden, bags, cap){
  let dogFound = false;

  garden.forEach((row) => {
    if (row.includes("D")) dogFound = true;
  })

  if (dogFound) return "Dog!!";

  let totalCrap = garden.reduce((acc, row) => {
    let rowCrapCount = 0;
    row.forEach(cell => {
      if (cell === "@") rowCrapCount++;
    });
    return acc + rowCrapCount;
  }, 0);

  if (totalCrap <= bags * cap) {
    return "Clean";
  } else {
    return "Cr@p";
  }
}

console.log(
  crap2([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 2, 2)
);
// expected 'Clean' get 'Clean'


function crap3(garden, bags, cap){
  let dogFound = false;
  let crapCounter = 0;
  garden.flat().forEach((cell) => {
    if (cell === "D") dogFound = true;
    if (cell === "@") crapCounter++;
  });
  if (dogFound) return "Dog!!";
  if (crapCounter <= bags * cap) {
    return "Clean";
  } else {
    return "Cr@p";
  }
}

console.log(
  crap3([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 2, 2)
);
// expected 'Clean' get 'Clean'