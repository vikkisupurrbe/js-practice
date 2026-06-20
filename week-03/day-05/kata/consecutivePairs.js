function pairs(ar){
  let l = 0;
  let r = 1;
  let counter = 0;
  
  while (r < ar.length) {
    if ( (ar[l] - ar[r]) * (ar[l] - ar[r]) === 1 ) {
      counter += 1;
    }
    l = l + 2;
    r = r + 2;
  }
  
  return counter;
};

console.log(pairs([1,2,5,8,-4,-3,7,6,5]));