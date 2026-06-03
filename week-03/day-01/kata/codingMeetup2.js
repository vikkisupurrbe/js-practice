function greetDevelopers(list) {
 list.forEach(dev => dev.greeting = `Hi ${dev.firstName}, what do you like the most about ${dev.language}?`);
 return list;
}

console.log(greetDevelopers(
  [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
  ]
));