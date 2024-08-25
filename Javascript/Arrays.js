//-------------------------------------------------Arrays-----------------------------------------------------------------
// An array is used to store multiple values in a single variable. This is compared to a variable that can store only one value. An array can hold many values under a single name, and you can access the values by referring to an index number.

// Creating an Array
// let arr = []
// let numbers = [1, 2, 3, 4, 5]
// let countries = ['Finland', 'Sweden', 'Norway']
// let empty = []
// let mixed = [1, 'two', 3.0, true]

// console.log(numbers) // Output: [1, 2, 3, 4, 5]
// console.log(countries) // Output: ['Finland', 'Sweden', 'Norway']
// console.log(empty) // Output: []
// console.log(arr) // Output: []
// console.log(numbers.length) // Output: 5

// Accessing array items using index
// let countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
// console.log(countries[0]) // Output: Finland
// console.log(countries[1]) // Output: Sweden
// console.log(countries[2]) // Output: Norway
// console.log(countries[3]) // Output: Denmark

// Modifying array elements
// countries[0] = 'Estonia';
// console.log(countries[0]); // Output: Estonia
// countries[4] = 'Greenland';
// console.log(countries[4]); // Output: Greenland


// Array Methods
// Array methods are used to manipulate arrays. Here are some of the most common methods.
// let numbers = [1, 2, 3, 4, 5]
// let countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
// console.log(numbers.push(6)) // Output: 6
// console.log(numbers) // Output: [1, 2, 3, 4, 5, 6]
// console.log(numbers.pop()) // Output: 6
// console.log(numbers) // Output: [1, 2, 3, 4, 5]
// console.log(countries.length) // Output: 5
// console.log(countries.push('Germany')) // Output: 6
// console.log(countries) // Output: ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland', 'Germany']
// console.log(countries[0]) // Output: Finland
// console.log(countries[5]) // Output: Germany
// console.log(countries[6]) // Output: undefined
// console.log(countries.pop()) // Output: Germany


// More Array Methods

// 1. shift()
// The shift() method removes the first element from an array and returns that removed element.
// console.log(countries.shift()); // Output: Estonia
// console.log(countries); // Output: ['Sweden', 'Norway', 'Denmark', 'Iceland', 'Greenland']

// 2. unshift()
// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
// console.log(countries.unshift('Finland')); // Output: 6
// console.log(countries); // Output: ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland', 'Greenland']

// 3. slice()
// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
// console.log(countries.slice(1, 4)); // Output: ['Sweden', 'Norway', 'Denmark']

// 4. splice()
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// console.log(countries.splice(2, 1, 'Germany')); // Output: ['Norway']
// console.log(countries); // Output: ['Finland', 'Sweden', 'Germany', 'Denmark', 'Iceland', 'Greenland']

// 5. concat()
// The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
// let moreCountries = ['Netherlands', 'Belgium'];
// let allCountries = countries.concat(moreCountries);
// console.log(allCountries); // Output: ['Finland', 'Sweden', 'Germany', 'Denmark', 'Iceland', 'Greenland', 'Netherlands', 'Belgium']

// 6. includes()
// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
// console.log(allCountries.includes('Sweden')); // Output: true
// console.log(allCountries.includes('France')); // Output: false

// 7. indexOf()
// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// console.log(allCountries.indexOf('Denmark')); // Output: 3
// console.log(allCountries.indexOf('Norway')); // Output: -1

// 8. join()
// The join() method creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string.
// console.log(allCountries.join(', ')); // Output: Finland, Sweden, Germany, Denmark, Iceland, Greenland, Netherlands, Belgium

// 9. reverse()
// The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
// console.log(allCountries.reverse()); // Output: ['Belgium', 'Netherlands', 'Greenland', 'Iceland', 'Denmark', 'Germany', 'Sweden', 'Finland']

// 10. sort()
// The sort() method sorts the elements of an array in place and returns the sorted array.
// console.log(allCountries.sort()); // Output: ['Belgium', 'Denmark', 'Finland', 'Germany', 'Greenland', 'Iceland', 'Netherlands', 'Sweden']

//Array of Array
// let webTechs = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
// ]
// console.log(webTechs.length) // 2
// console.log(webTechs[0]) // ['HTML', 'CSS', 'JS', 'React']
// console// .log(webTechs[1]) // ['Node', 'Express', 'MongoDB']
// console.log(webTechs[0][0]) // 'HTML'
// console.log(webTechs[1][0]) // 'Node'
// console.log(webTechs[0][1]) // 'CSS'

//Array of Objects
// let countries = [
//     { name: 'Finland', city: 'Helsinki' },
//     { name: 'Sweden', city: 'Stockholm' },
//     { name: 'Norway', city: 'Oslo' }
// ]
// console.log(countries.length) // 3
// console.log(countries[0]) // {name: 'Finland', city: 'Helsinki'}
// console.log(countries[1]) // {name: 'Sweden', city: 'Stockholm'}
// console.log(countries[2]) // {name: 'Norway', city: 'Oslo'}
// console.log(countries[0].name) // 'Finland'
// console.log(countries[1].name) // 'Sweden'
// console.log(countries[2].name) // 'Norway'

//Array Iteration: Array.forEach()

// let countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
// countries.forEach(function (country) {
//     console.log(country)
// })
// countries.forEach(country => console.log(country))

// let countries = ['Finland', 'Sweden', 'Norway', 'Denmark', '
// Iceland']
// countries.forEach(function (country) {
//     console.log(country.toUpperCase())
// })
// countries.forEach(country => console.log(country.toUpperCase()))



