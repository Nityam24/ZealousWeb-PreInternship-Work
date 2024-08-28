// -----------------------------------------------Destructuring and Spread-----------------------------------------------------------

// Destructuring Array

// const numbers = [1, 2, 3]
//   let [numOne, numTwo, numThree] = numbers

//   console.log(numOne, numTwo, numThree)

//   const scientificConstants = [2.72, 3.14, 9.81, 37, 100]
//   let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants

//   console.log(e, pi, gravity, bodyTemp, boilingTemp)

// Destructuring Object

// const rectangle = {
//     width: 20,
//     height: 10,
//     area: 200
//   }
//   let { width, height, area } = rectangle
//   console.log(width, height, area)
//   const person = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//     country: 'Finland',
//     job: 'Instructor and Developer',
//     skills: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'React',
//       'Redux',
//       'Node',
//       'MongoDB',
//       'Python',
//       'D3.js'
//     ]
//   }
//   let { firstName, lastName, age, country, job, skills } = person
//   console.log(firstName, lastName, age, country, job, skills)


//    Destructuring with default values
//   const rectangle = {
//     width: 20,
//     height: 10
//   }
//   let { width, height, area = 200 } = rectangle
//   console.log(width, height, area)
//   const person = {   
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//     country: 'Finland',
//     job: 'Instructor and Developer',
//     skills: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//  ]
//   }
//   let { firstName, lastName, age, country, job, skills
//   } = person
//   console.log(firstName, lastName, age, country, job, skills)


// Object parameter without destructuring
// const person = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//     country: 'Finland',
//     job: 'Instructor and Developer',
//     skills: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'React'
//     ],
//     languages: ['Amharic', 'English', 'Suomi(Finnish)']
//   }
//   // Let us create a function which give information about the person object without destructuring
  
//   const getPersonInfo = obj => {
//     const skills = obj.skills
//     const formattedSkills = skills.slice(0, -1).join(', ')
//     const languages = obj.languages
//     const formattedLanguages = languages.slice(0, -1).join(', ')
  
//     personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is  ${
//       obj.age
//     } years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${
//       skills[skills.length - 1]
//     }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`
  
//     return personInfo
//   }
  
//   console.log(getPersonInfo(person))

// Object parameter with destructuring
// const person = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//     country: 'Finland',
//     job: 'Instructor and Developer',
//     skills: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'React'
//     ],
//     languages: ['Amharic', 'English', 'Suomi(Finnish)']
//   }
//   // Let us create a function which give information about the person object with destructuring

//   const getPersonInfo = obj => {
//     const { firstName, lastName, age, country, job, skills, languages } = obj
//     const formattedSkills = skills.slice(0, -1).join(', ')
//     const formattedLanguages = languages.slice(0, -1).join(', ')
//     personInfo = `${firstName} ${lastName} lives in ${country}. He is  $
//     {age} years old. He is an ${job}. He teaches ${formattedSkills} and $
//     {skills[skills.length - 1]}. He speaks ${formattedLanguages} and a $
//     little bit of ${languages[2]}.`
//     return personInfo
//   }
//   console.log(getPersonInfo(person))


// Spread or Rest Operator
// Spread operator is used to split up array elements or object properties.
// const numbers = [1, 2, 3]
// console.log(numbers)
// console.log(...numbers)
// const sumAllNums = (...args) => {
//     console.log(args)
//     let sum = 0
//     for (const num of args) {
//       sum += num
//     }

//     return sum
//   }
//   console.log(sumAllNums(1, 2, 3, 4, 5))
//   console.log(sumAllNums(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

//   // Rest parameter is used to collect a function's arguments into an array.
//   const sumAllNums = (...args) => {
//     console.log(args)
//     let sum = 0
//     for (const num of args) {
//       sum += num
//     }
//     return sum
//   }
//   console.log(sumAllNums(1, 2, 3, 4, 5))
//   console.log(sumAllNums(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

// Spread operator in array
// const evens = [2, 4, 6]
// const odds = [1, 3, 5]
// const primes = [2, 3, 5]
// const numbers = [...primes, ...evens, ...odds]
// console.log(numbers)
// const numbers = [2, 3, 5]
// const newNumbers = [...numbers, 1, 4, 6]
// console.log(newNumbers)

// Spread operator in object
// const person = { name: 'Asabeneh' }
// const job = { role: 'Instructor' }
// const country = { country: 'Finland' }
// const personInfo = { ...person, ...job, ...country }
// console.log(personInfo)
// const person = { name: 'Asabeneh', age: 250 }
// const newPerson = { ...person, age: 21 }
// console.log(newPerson)

// Spread operator in array and object
// const udemy = 'Udemy'
// const letters = [...udemy]
// console.log(letters)
// const udemy = 'Udemy'
// const letters = udemy.split('')
// console.log(letters)
// const hobbies = ['reading', 'cooking', 'coding']
// const hobbiesCopy = [...hobbies]
// console.log(hobbiesCopy)
// const hobbies = ['reading', 'cooking', 'coding']
// const personalHobbies = ['travelling', ...hobbies, 'walking']
// console.log(personalHobbies)

// const person = { name: 'Asabeneh' }
// const copyPerson = { ...person }
// console.log(copyPerson)
// const person = { name: 'Asabeneh' }
// const updatePerson = { ...person, name: 'Eyob' }
// console.log(updatePerson)


