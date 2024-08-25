// -----------------------------------------------------Booleans----------------------------------------------------------------------------------
// let isLightOn = true
// let isRaining = false
// let isHungry = false
// let isMarried = true
// let truValue = 4 > 3    // true
// let falseValue = 4 < 3  // false

// Truthy values
// All numbers(positive and negative) are truthy except zero
// All strings are truthy except an empty string ('')
// The boolean true
// Falsy values
// 0
// 0n
// null
// undefined
// NaN
// the boolean false
// '', "", ``, empty string
// It is good to remember those truthy values and falsy values. In later section, we will use them with conditions to make decisions.

// ---------------------------------------------------Undefined--------------------------------------------------------------------
// let firstName
// console.log(firstName) //not defined, because it is not assigned to a value yet

// ---------------------------------------------------Null--------------------------------------------------------------------
// let emptyValue = null
// console.log(emptyValue) //null

// ---------------------------------------------------NaN--------------------------------------------------------------------
// let calculate = 10 * 'Asabeneh'
// console.log(calculate) // NaN

// ---------------------------------------------------Operators--------------------------------------------------------------------
// //Assignment operators
// let x = 3
// let y = 2
// console.log(x) // 3
// console.log(y) // 2
// x += 5 // x = x + 5
// y *= 5 // y = y * 5
// console.log(x) // 8
// console.log(y) // 10

// //Comparison operators
// let a = 5
// let b = 4
// console.log(a == b) // false
// console.log(a != b) // true
// console.log(a > b) // true
// console.log(a < b) // false
// console.log(a >= b) // true
// console.log(a <= b) // false

// //Logical operators
// //&&, ||, !
// let c = 3
// let d = 2
// let and = c > d && c != d // true
// let or = c > d || c == d // true
// let not = !(c > d) // false
// console.log(and)
// console.log(or)
// console.log(not)

// //Increment and Decrement operators
// let operand = 3
// operand++
// console.log(operand) // 4
// operand--
// console.log(operand) // 3

// // Bitwise operators
// let bitwiseAnd = a & b; // 4 (0101 & 0100 = 0100)
// let bitwiseOr = a | b; // 5 (0101 | 0100 = 0101)
// let bitwiseXor = a ^ b; // 1 (0101 ^ 0100 = 0001)
// let bitwiseNot = ~a; // -6 (~0101 = 1010)
// let bitwiseLeftShift = a << 1; // 10 (0101 << 1 = 1010)
// let bitwiseRightShift = a >> 1; // 2 (0101 >> 1 = 0010)
// console.log(bitwiseAnd);
// console.log(bitwiseOr);
// console.log(bitwiseXor);
// console.log(bitwiseNot);
// console.log(bitwiseLeftShift);
// console.log(bitwiseRightShift);

// // Ternary operator
// let ternary = a > b ? "a is greater" : "b is greater";
// console.log(ternary); // "a is greater"

// // Type operators
// console.log(typeof a); // "number"
// console.log(a instanceof Number); // false (a is a primitive, not an instance of Number)

// // Arithmetic operators
// let num1 = 10;
// let num2 = 5;

// let sum = num1 + num2; // addition
// let difference = num1 - num2; // subtraction
// let product = num1 * num2; // multiplication
// let quotient = num1 / num2; // division
// let remainder = num1 % num2; // modulus

// console.log(sum); // 15
// console.log(difference); // 5
// console.log(product); // 50
// console.log(quotient); // 2
// console.log(remainder); // 0

//--------------------------------------------Window Methods------------------------------------------------------------------
// alert()
// alert('This is an alert message')

// prompt()
// let age = prompt('How old are you?')
// console.log(age)

// confirm()
// let isAge = confirm('Your age is 25')
// console.log(isAge)

//-----------------------------------------------------Date Object-------------------------------------------------------------
// let now = new Date()
// console.log(now) // shows today's date and time
// console.log(now.getTime()) // shows the number of milliseconds since the Unix Epoch (January 1
// console.log(now.getFullYear()) // shows the year
// console.log(now.getMonth()) // shows the month
// console.log(now.getDate()) // shows the day of the month
// console.log(now.getDay()) // shows the day of the week
// console.log(now.getHours()) // shows the hour
// console.log(now.getMinutes()) // shows the minute
// console.log(now.getSeconds()) // shows the second
// console.log(now.getMilliseconds()) // shows the millisecond
// console.log(now.getTimezoneOffset()) // shows the timezone offset in minutes
// console.log(now.toDateString()) // shows the date in a human-readable format
// console.log(now.toTimeString()) // shows the time in a human-readable format
// console.log(now.toLocaleDateString()) // shows the date in a human-readable format
// console.log(now.toLocaleTimeString()) // shows the time in a human-readable format
// console.log(now.toISOString()) // shows the date and time in a format that can be used in a URL
// console.log(now.toUTCString()) // shows the date and time in UTC format
// console.log(now.toLocaleString()) // shows the date and time in a human-readable format
// console.log(now.toTimeString()) // shows the time in a human-readable format
// console.log(now.toTimeString()) // shows the time in a human-readable format
// console.log(now.toISOString()) // shows the date and time in a format that can be used



