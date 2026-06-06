function getFirstPython1(list) {
  let output = ""
  list.forEach((dev) => {
    if (dev.language === "Python") {
      output = dev;
      return `${output.firstName}, ${output.country}`
    }
  })

  if (output === "") {
    return "There will be no Python developers"
  }
}

console.log(getFirstPython1(
  [
    { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
    { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
  ]
))

function getFirstPython2(list) {
  const pythonDev = list.find(dev => dev.language === "Python");
  if (pythonDev) {
    return `${pythonDev.firstName}, ${pythonDev.country}`;
  } else {
    return "There will be no Python developers"
  }
}

console.log(getFirstPython2(
  [
    { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
    { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
  ]
))