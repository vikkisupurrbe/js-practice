// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// My code
function reverseInt1(n) {
  let char = n.toString().split(''); ['-', '1', '5']
  let prefix = char[0];
  if (prefix === "-" || prefix === "+") {
    prefix = char.splice(0, 1);
    return parseInt(prefix + char.reverse().join(''));
  } else {
    return parseInt(char.reverse().join(''));
  }
}

console.log(reverseInt1(981));
console.log(reverseInt1(-15));

// Solution code
function reverseInt2(n) {
  const reversed = n.toString().split('').reverse().join('');
  return parseInt(reversed) * Math.sign(n);
  // parseInt('51-') dropped the minus sign at the end, becomes 51
  // Math.sign(-15) gives -1
  // the sign is restored by multiplying
  // 51 * -1 = -51
}

console.log(reverseInt2(981));
console.log(reverseInt2(-15));