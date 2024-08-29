// ----------------------------------------------------Promise------------------------------------------------------------------
// Promise is a JavaScript object for asynchronous operation.

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation completed successfully.
// rejected: meaning that the operation failed.


// // Callbacks
//Callback
// const doSomething = callback => {
//     setTimeout(() => {
//       const skills = ['HTML', 'CSS', 'JS']
//       callback('It did not go well', skills)
//     }, 2000)
//   }
  
//   const callback = (err, result) => {
//     if (err) {
//       return console.log(err)
//     }
//     return console.log(result)
//   }
  
//   doSomething(callback)


// // Promise constructor
// Promise
// const doPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const skills = ['HTML', 'CSS', 'JS']
//       if (skills.length > 0) {
//         resolve(skills)
//       } else {
//         reject('Something wrong has happened')
//       }
//     }, 2000)
//   })
  
//   doPromise
//     .then(result => {
//       console.log(result)
//     })
//     .catch(error => console.log(error))

// // Fetch API
// const url = 'https://restcountries.com/v2/all' // countries api
// fetch(url)
//   .then(response => response.json()) // accessing the API data as JSON
//   .then(data => {
//     // getting the data
//     console.log(data)
//   })
//   .catch(error => console.error(error)) // handling error if something wrong happens

// // Async and Await
// const square = async function (n) {
//     return n * n
//   }
  
//   square(2)


// // Let us fetch API data using both promise method and async and await method.

// // promise
// const url = 'https://restcountries.com/v2/all'
// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//   })
//   .catch(error => console.error(error))


// // async and await
// const fetchData = async () => {
//   try {
//     const response = await fetch(url)
//     const countries = await response.json()
//     console.log(countries)
//   } catch (err) {
//     console.error(err)
//   }
// }
// console.log('===== async and await')
// fetchData()