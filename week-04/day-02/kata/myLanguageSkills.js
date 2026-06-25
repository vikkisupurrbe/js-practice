function myLanguages1(results) {
  const passResults = [];
  for (let language in results) {
    let score = results[language];
    if (score >= 60) {
      passResults.push({[language]: score});
    }
  }
  passResults.sort((a, b) => Object.values(b) - Object.values(a))
  const fluentLanguages = passResults.map(result => Object.keys(result)[0]);

  return fluentLanguages;
}

console.log(myLanguages1({"Java" : 10, "Ruby" : 80, "Python" : 65}));
// expect [ 'Ruby', 'Python' ] get [ 'Ruby', 'Python' ]
console.log(myLanguages1({"Hindi" : 60, "Greek" : 71, "Dutch" : 93}));
// expect [ 'Dutch', 'Greek', 'Hindi' ] get [ 'Dutch', 'Greek', 'Hindi' ]
console.log(myLanguages1({"C++" : 50, "ASM" : 10, "Haskell" : 20}));
// expect [] get []

function myLanguages2(results) {
  return Object.entries(results)
    .filter(([_, score]) => score >= 60)
    .sort((a, b) => b[1] - a[1])
    .map(([language, _]) => language);
}

console.log(myLanguages2({"Java" : 10, "Ruby" : 80, "Python" : 65}));
// expect [ 'Ruby', 'Python' ] get [ 'Ruby', 'Python' ]
console.log(myLanguages2({"Hindi" : 60, "Greek" : 71, "Dutch" : 93}));
// expect [ 'Dutch', 'Greek', 'Hindi' ] get [ 'Dutch', 'Greek', 'Hindi' ]
console.log(myLanguages2({"C++" : 50, "ASM" : 10, "Haskell" : 20}));
// expect [] get []