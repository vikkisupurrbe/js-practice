function countLanguages1(list) {
  const obj = Object.fromEntries(
    Array.from( 
    { length: list.length }, 
    [list.map(dev => dev.language), obj.language ? obj.language + 1 : 1]
    ))
    return obj;
}

// console.log(
//   countLanguages1(
//     [
//       { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
//       { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
//       { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
//       { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
//     ]
//   )
// );

function countLanguages2(list) {
  return list.reduce((acc, dev) => {
    acc[dev.language] = (acc[dev.language] || 0) + 1;
    return acc;
  }, {});
}

console.log(
  countLanguages2(
    [
      { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
      { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
      { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
      { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
    ]
  )
);