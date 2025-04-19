const numbers = [1,2,3,4,5,6,7,8,9]

let total = 0 //we cant use const here because we have another code for the total to change and const cant be changed 

for (let index = 0; index < numbers.length; index++) {
  total = total + numbers[index]
}

console.log(total)