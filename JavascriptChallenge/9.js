function countVowels(string) {
  let count = 0;

  for (let index = 0; index < string.length; index++) {
    let letter = string[index];

    if (
      letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u" ||
      letter === "A" ||
      letter === "E" ||
      letter === "I" ||
      letter === "O" ||
      letter === "U"
    ) {
      count++;
    }
  }

  return count;
}

let check= 'apple'
console.log(countVowels(check))