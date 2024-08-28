//-----------------------------------------------------Scope-----------------------------------------------------------------------------
// Variable is the fundamental part in programming. We declare variable to store different data types. To declare a variable we 
// use the key word var, let and const. A variable can be declared at different scope. In this section, we will see the scope 
// variables, scope of variables when we use var or let. Variables scopes can be:

// Global
// Local

//// Window Global Object

// a = 'JavaScript' // declaring a variable without let or const make it available in window object and this found anywhere
// b = 10 // this is a global scope variable and found in the window object
// function letsLearnScope() {
//   console.log(a, b)
//   if (true) {
//     console.log(a, b)
//   }
// }
// console.log(a, b) // accessible


//// Global scope

// let a = 'JavaScript' // is a global scope it will be found anywhere in this file
// let b = 10 // is a global scope it will be found anywhere in this file
// function letsLearnScope() {
//   console.log(a, b) // JavaScript 10, accessible
//   if (true) {
//     let a = 'Python'
//     let b = 100
//     console.log(a, b) // Python 100
//   }
//   console.log(a, b)
// }
// letsLearnScope()
// console.log(a, b) // JavaScript 10, accessible

//// Local scope

// function letsLearnScope() {
//     var gravity = 9.81
//     console.log(gravity)
  
//   }
//   // console.log(gravity), Uncaught ReferenceError: gravity is not defined
  
//   if (true){
//     var gravity = 9.81
//     console.log(gravity) // 9.81
//   }
//   console.log(gravity)  // 9.81
  
//   for(var i = 0; i < 3; i++){
//     console.log(i) // 0, 1, 2
//   }
//   console.log(i) // 3


// -----------------------------------------------Object in Javascript-----------------------------------------------------------------

// Object is a non-primitive data type in JavaScript. It is a collection of key-value pairs. Objects are widely used in JavaScript

//Creating an empty object
//const person = {}

//Creating an objecting with values
// const person = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//     country: 'Finland',
//     city: 'Helsinki'
//   }

//Accessing object values
// console.log(person)
// console.log(person.firstName)


//Object methods
// const person = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',

//     // Method
//     fullName: function() {
//       return `${this.firstName} ${this.lastName}`
//     }
//   }

//   console.log(person.fullName()) // Asabeneh Yetayeh
//   console.log(person.fullName.call({firstName: 'John', lastName: 'Doe'}))

//Object with different data types
// const person = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//     country: 'Finland',

//     skills: ['HTML', 'CSS', 'JS', 'React', 'Python'],
//     getFullName: function() {
//       return `${this.firstName} ${this.lastName}`
//     },
//     'phone number': '+3584545454545'
//   }

//   console.log(person.skills)
//   console.log(person.getFullName())
//   console.log(person['phone number'])
//   console.log(person['phone number'].length) // 15
//   console.log(person['phone number'].includes('+')) // true
//   console.log(person['phone number'].includes('5')) // true

//Object keys, values, entries
// const person = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//     skills: ['HTML', 'CSS', 'JS', 'React', 'Python'],
//     country: 'Finland',
//     job: 'Instructor',
//     github: 'asabeneh',
//     getFullName: function() {
//       return `${this.firstName} ${this.lastName}`
//     }
//   }

//   console.log(Object.keys(person))
//   console.log(Object.values(person))
//   console.log(Object.entries(person))
//   console.log(Object.entries(person).map(([key, value]) => `${key}: ${value
//   }`))

//hasOwnProperty()
// const person = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//     skills: ['HTML', 'CSS', 'JS', 'React', 'Python'],
//     country: 'Finland',
//     job: 'Instructor',
//     github: 'asabeneh',
//     getFullName: function() {
//       return `${this.firstName} ${this.lastName}`
//     }
//   }

//   console.log(person.hasOwnProperty('firstName'))
//   console.log(person.hasOwnProperty('score'))
//   console.log(person.hasOwnProperty('score') && person.score === undefined) // true
//   console.log(person.hasOwnProperty('score') && person.score === null) // false
//   console.log(person.hasOwnProperty('score') && person.score === undefined) // true
//   console.log(person.hasOwnProperty('score') && person.score === null) // false

