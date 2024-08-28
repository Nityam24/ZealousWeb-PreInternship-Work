//----------------------------------------------------Higher order function-------------------------------------------------------

// Higher order function is a function that takes another function as an argument or returns a function as a result.

//Callback
// A callback function is a function that is passed as an argument to another function.

//Example
// function morning(){
//     return 'Good Morning'
// }

// function greet(name, callback){
//     const message = callback()
//     return `${message} ${name}`
// }

// console.log(greet('Peter', morning)) // Good Morning Peter
// console.log(greet('John', morning)) // Good Morning John
// console.log(greet('Peter', function(){
//     return 'Good Morning'
// })) // Good Morning Peter

//Returning function
// function greet(){
//     return function(name){
//         return `Hello ${name}`
//     }
// }

// const message = greet()
// console.log(message('Peter')) // Hello Peter
// console.log(message('John')) // Hello John
// console.log(greet()('James')) // Hello James

//Setting Interval using a setInterval function

// function sayHello(){
//     console.log('Hello')
// }

// setInterval(sayHello, 2000)

// setTimeout
// function greet(){
//     console.log('Hello')
// }
// setTimeout(greet, 2000)

// --------------------------------------------Functional Programming--------------------------------------------------------

// forEach
// let sum = 0;
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(num => console.log(num))
// console.log(sum)

//Map
// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map(num => num * num)
// console.log(squaredNumbers)

// Filter
// const countriesContainingLand = countries.filter((country) =>
//     country.includes('land')
//   )
//   console.log(countriesContainingLand)

//Reduce
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((acc, cur) => acc + cur, 0)
// console.log(sum)

//Find
// const countries = ['Finland', 'Sweden', 'Norway'];
// const countryWithLand = countries.find((country) => country.includes('land'))
// console.log(countryWithLand)

//FindIndex
// const countries = ['Finland', 'Sweden', 'Norway'];
// const countryIndex = countries.findIndex((country) => country.includes('land'))
// console.log(countryIndex)

//Some
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
// const result = names.some((name) => name.length > 7)
// console.log(result)

//Every
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
// const result = names.every((name) => name.length > 7)
// console.log(result)

//Sort
// const numbers = [1, 2, 3, 4, 5];
// const sortedNumbers = numbers.sort((a, b) => b - a)
// console.log(sortedNumbers)

//Chaining
// const users = [
//     {
//       name: 'Brook',
//       scores: 75,
//       skills: ['HTM', 'CSS', 'JS'],
//       age: 16
//     },
//     {
//       name: 'Alex',
//       scores: 80,
//       skills: ['HTM', 'CSS', 'JS'],
//       age: 18
//     },
//     {
//       name: 'David',
//       scores: 75,
//       skills: ['HTM', 'CSS'],
//       age: 22
//     },

// ]

// const scoresGreaterThan75 = users
//     .map(user => user.scores)
//     .filter(score => score > 75)
// console.log(scoresGreaterThan75)
// const scoresGreaterThan75 = users
//     .map(user => user.scores)
//     .filter(score => score > 75)
// console.log(scoresGreaterThan75)






