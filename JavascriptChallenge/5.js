function reverse(array) {
  let reversed = [];

  for (let index = 0; index < array.length; index++) {
    reversed.unshift(array[index]);
  }

  return reversed;
}
 let fruits =['apple','mango','banana','pear']
 console.log(reverse(fruits))