// 1. Declare an array
//    1.Declare an array with 5 elements containing fruits
//    2.console log the 3rd index element
//    3.change the value of the 2nd index element to jambura
//    4.console log the final array


const fruits = ['apple', 'bannana', 'tomato', 'mango', 'orange'];

console.log(fruits[3])

const add = fruits.splice(2, 1, 'jambura')
console.log(fruits)
console.log(add)