// sessionStorage

// sessionStorage is only available within the browser tab or window session. It’s designed to store data in a single web page 
// session. That means if the window is closed the session data will be removed. Since sessionStorage and localStorage
//  has similar methods, we will focus only on localStorage.

// Storing data to sessionStorage
// sessionStorage.setItem('key', 'value
// sessionStorage.setItem('name', 'Asabeneh')
// sessionStorage.setItem('country', 'Finland')
// sessionStorage.setItem('age', 250)

// Getting data from sessionStorage
// const name = sessionStorage.getItem('name')
// const country = sessionStorage.getItem('country')
// const age = sessionStorage.getItem('age')
// console.log(name, country, age)

// Removing data from sessionStorage
// sessionStorage.removeItem('name')
// sessionStorage.removeItem('country')
// sessionStorage.removeItem('age')
// sessionStorage.clear() // This will remove all data from sessionStorage
// sessionStorage.removeItem('name')

// console.log(sessionStorage.getItem('name')) // null
// console.log(sessionStorage.getItem('country')) // null
// console.log(sessionStorage.getItem('age')) // null
// console.log(sessionStorage.getItem('name')) // null
// console.log(sessionStorage.getItem('country')) // null
// console.log(sessionStorage.getItem('age')) // null

// Storing objects in sessionStorage
// const person = {
//     name: 'Asabeneh',
//     country: 'Finland',
//     age: 250
//   }

//   sessionStorage.setItem('person', JSON.stringify(person))
//   const data = JSON.parse(sessionStorage.getItem('person'))
//   console.log(data)
//   console.log(data.name)

//   sessionStorage.setItem('person', JSON.stringify(person))
//   const data = JSON.parse(sessionStorage.getItem('person'))
//   console.log(data)


// // localStorage
// localStorage is designed to store data in the web browser and it will be available even when the browser is closed and 
// reopened. It’s designed to store data that will be available across multiple web pages. 

// Setting item to the localStorage
// localStorage.setItem('key', 'value')

// Storing string in a localStorage
// localStorage.setItem('firstName', 'Asabeneh') // since the value is string we do not stringify it
// console.log(localStorage)

// Storing number in a local storage
// localStorage.setItem('age', 200)
// console.log(localStorage)

// Getting item from localStorage
// let firstName = localStorage.getItem('firstName')
// let age = localStorage.getItem('age')
// let skills = localStorage.getItem('skills')
// console.log(firstName, age, skills)

// Removing item from localStorage
// localStorage.removeItem('firstName')
// localStorage.removeItem('age')
// localStorage.removeItem('skills')

// Clearing localStorage
// localStorage.clear()

// Storing array in localStorage
// const skills = ['HTML', 'CSS', 'JS', 'React']
// localStorage.setItem('skills', JSON.stringify(skills))
// console.log(localStorage)

// Getting array from localStorage
// const data = JSON.parse(localStorage.getItem('skills'))
// console.log(data)

// Storing object in localStorage
// const person = {
//     name: 'Asabeneh',
//     country: 'Finland',
//     age: 250
//   }

//   localStorage.setItem('person', JSON.stringify(person))
//   console.log(localStorage)
//   console.log(person)
//   console.log(JSON.parse(localStorage.getItem('person')))
//   console.log(JSON.parse(localStorage.getItem('person')).name)
//   console.log(JSON.parse(localStorage.getItem('person')).country)

