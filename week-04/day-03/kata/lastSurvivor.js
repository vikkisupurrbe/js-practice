function lastSurvivor(letters, coords) {
  const lettersList = letters.split("");
  coords.forEach((item) => {
    lettersList.splice(item, 1);
    console.log(lettersList);
  });
  return lettersList.join("");
}

console.log(lastSurvivor('abc', [1, 1]));