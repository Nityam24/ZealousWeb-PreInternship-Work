//------------------------------------------------Conditional Statements--------------------------------------------------------

// 1. if statement

// Syntax
// if(condition){
//     // code block
// }

// let isRaining = true
// if(isRaining){
//     console.log('You need a rain coat.')        // Output: You need a rain coat.
// }

// 2. if-else statement

// Syntax
// if(condition){
//     // code block
// }else{
//     // code block
// }

// let isRaining = false
// if(isRaining){
//     console.log('You need a rain coat.')
// }else{
//     console.log('No need for a rain coat.')     // Output: No need for a rain coat.
// }

// 3. else-if statement

// Syntax
// if(condition){
//     // code block
// }else if(condition){
//     // code block
// }else{
//     // code block
// }

// let weather = 'sunny'
// if(weather === 'rainy'){
//     console.log('You need a rain coat.')
// }else if(weather === 'cloudy'){
//     console.log('It might be cold, you need a jacket.')
// }else if(weather === 'sunny'){
//     console.log('Go out freely.')
// }else{
//     console.log('No need for rain coat.')
// }

// 4. Switch Statement

// Syntax
// switch(expression){
//     case x:
//         // code block
//         break;
//     case y:
//         // code block
//         break;
//     default:
//         // code block
// }

// let weather = 'cloudy'
// switch(weather){
//     case 'rainy':
//         console.log('You need a rain coat.')
//         break
//     case 'cloudy':
//         console.log('It might be cold, you need a jacket.')
//         break
//     case 'sunny':
//         console.log('Go out freely.')
//         break
//     default:
//         console.log('No need for rain coat.')
// }

// 5. Ternary Operator

// Syntax
// condition ? expression1 : expression2

// let weather = 'cloudy'
// let result = (weather === 'rainy') ? 'You need a rain coat.' : 'No need for rain coat.'
// console.log(result) // Output: No need for rain coat.



