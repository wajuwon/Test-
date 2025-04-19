function removeNegativeNumber(array) {
  let result = [];

  for (let index = 0; index < array.length; index++) {
    if (array[index] >= 0) {
      result.push(array[index]);
    }
  }

  return result;
}

let number =[-1,-3,1,6,7,8,9]
console.log(removeNegativeNumber(number))