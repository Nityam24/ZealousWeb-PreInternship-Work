// //--------------------------------------------Function in javascript---------------------------------------------------------------

// // function declaration
// function functionName(){
//     // code goes here
// }

// // function expression
// const functionName = function(){
//     // code goes here
// }

// // Function without a parameter and return
// function printToConsole(){
//     console.log('30 Days Of JavaScript')
// }
// printToConsole() // 30 Days Of JavaScript

// // Function returning value
// function addTwoNumbers(){
//     return 2 + 3
// }
// console.log(addTwoNumbers()) // 5

// // Function with a parameter and return
// function fullName(firstName, lastName){
//     return `${firstName} ${lastName}`
// }
// console.log(fullName('Asabeneh', 'Yetayeh')) // Asabeneh Yetayeh

// // Function with many parameters
// function addMultipleNumbers(a, b, c, d, e){
//     return a + b + c + d + e
// }
// console.log(addMultipleNumbers(2, 3, 5, 10, 20)) // 40

// // Function with default parameter
// function calculateAge(birthYear, currentYear = 2019){
//     return currentYear - birthYear
// }
// console.log(calculateAge(1819)) // 200

// // Function with unlimited number of parameters
// function sumAllNums(){
//     let sum = 0
//     for(let i = 0; i < arguments.length; i++){
//         sum += arguments[i]
//     }
//     return sum
// }
// console.log(sumAllNums(1, 2, 3, 4, 5)) // 15

// // Unlimited number of parameters in arrow function
// const sumAllNums = (...args) => {
//     let sum = 0
//     for(let arg of args){
//         sum += arg
//     }
//     return sum
// }
// console.log(sumAllNums(1, 2, 3, 4, 5)) // 15

// // Function as an argument
// function square(x){
//     return x * x
// }
// function cube(x){
//     return x * x * x
// }
// function math(num, func){
//     return func(num)
// }
// console.log(math(3, square)) // 9

// // Arrow function
// const square = (x) => {
//     return x * x
// }
// console.log(square(3)) // 9

// // Arrow function with one parameter
// const square = x => x * x
// console.log(square(3)) // 9

// // Arrow function with two parameters
// const addTwoNumbers = (a, b) => a + b
// console.log(addTwoNumbers(2, 3)) // 5

//Anonymous Function
// const anonymousFun = function(){
//     console.log('I am an anonymous function')
// }
// anonymousFun() // I am an anonymous function

// // Self invoking function
// (function(){
//     console.log('I will invoke myself')
// })() // I will invoke myself




