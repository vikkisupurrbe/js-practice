function crap1(garden, bags, cap){
  let output;
  garden.forEach((row) => {
    if (row.includes("D")) output = "Dog!!";
    row.forEach((cell) => {
      if (cell === "@") output += 1;
    })
  })
  console.log(output);
  if (output === "Dog!!") return output;
  
  if (output <= bags * cap) {
    return "Clean";
  } else {
    return "Cr@p"
  }
}

console.log(
  crap1(([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 2, 2))
);
// expected 'Clean' get 'Crap'


function crap2(garden, bags, cap){
  let output;
  garden.forEach((row) => {
    if (row.includes("D")) output = "Dog!!";
  })
  garden.reduce((acc, row) => {
    if (row.forEach(cell => cell === "@")) acc + 1;
    return acc;
  })
  console.log(output);
  if (output === "Dog!!") return output;
  
  if (acc <= bags * cap) {
    return "Clean";
  } else {
    return "Cr@p"
  }
}

console.log(
  crap2(([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 2, 2))
);
// expected 'Clean' get 'Crap'