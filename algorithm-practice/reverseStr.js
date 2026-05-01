// --- Directions
// Given a string, return a new string with the reversed order of characters
// --- Examples
//   reverse('hi') === 'ih'
//   reverse('hello') === 'olleh'
//   reverse('CodingMoney') === 'yenoMgnidoC'

// built-in function
function reverse1(str) {
  return str.split('').reverse().join('');
};

console.log(reverse1('hi'));
console.log(reverse1('CodingMoney'));

// basic
function reverse2(str) {
  let reverse = '';

  for (let char of str) {
    reverse = char + reverse;
  }

  return reverse;
}
console.log(reverse2('hi'));
console.log(reverse2('CodingMoney'));