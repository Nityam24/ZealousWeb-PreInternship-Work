// ---------------------------------------------------Sets in javascript--------------------------------------------------------
// Creating an empty set
// const companies = new Set()
// console.log(companies) // Set(0) {}

// Creating set from array
//const languages = new Set(['English', 'Finnish', 'English', 'French', 'Spanish'])
//console.log(languages) // Set(4) {'English', 'Finnish', 'French', 'Spanish'}
// console.log(languages.size) // 4
// console.log(languages.has('English')) // true
// console.log(languages.has('Finnish')) // true
// console.log(languages.has('Swedish')) // false

// Adding an element to a set
// const companies = new Set()
// console.log(companies.size) // 0
// companies.add('Google')
// companies.add('Facebook')
// companies.add('Amazon')

// By using loop
// const companies = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
// setOfCompanies = new Set()
// for (const company of companies) {
//   setOfCompanies.add(company)
// }

// Deleting an element a set

// const companies = new Set(['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft'])
// console.log(companies.size) // 5
// companies.delete('Google')
// console.log(companies.size) // 4
// console.log(companies) // Set(4) {'Facebook', 'Amazon', 'Oracle', 'Microsoft'}
// console.log(companies.has('Google')) // false

// Checking an element in a set
// const companies = new Set(['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft'])
// console.log(companies.has('Google')) // true
// console.log(companies.has('Apple')) // false

// Clearing the set
// const companies = new Set(['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft'])
// companies.clear()
// console.log(companies.size) // 0
// console.log(companies) // Set(0) {}


// ---------------------------------------------------Maps in javascript--------------------------------------------------------

// Creating an empty Map
// const map = new Map()
// console.log(map) // Map(0) {}
// console.log(map.size) // 0
// console.log(map.has('key')) // false

// Creating a map from an array
// const countriesMap = new Map([
//   ['Finland', 'Helsinki'],
//   ['Sweden', 'Stockholm'],
//   ['Norway', 'Oslo']
// ])
// console.log(countriesMap) // Map(3) {'Finland' => 'Helsinki', 'Sweden' => 'Stockholm', 'Norway' => 'Oslo'}
// console.log(countriesMap.size) // 3
// console.log(countriesMap.has('Finland')) // true
// console.log(countriesMap.has('Nepal')) // false
// console.log(countriesMap.get('Finland')) // Helsinki

// Adding values to the map
// const countriesMap = new Map()
// countriesMap.set('Finland', 'Helsinki')
// countriesMap.set('Sweden', 'Stockholm')
// countriesMap.set('Norway', 'Oslo')
// console.log(countriesMap.size) // 3
// console.log(countriesMap.get('Finland')) // Helsinki
// console.log(countriesMap.has('Finland')) // true

// Getting values from the map
// const countriesMap = new Map([
//   ['Finland', 'Helsinki'],
//   ['Sweden', 'Stockholm'],
//   ['Norway', 'Oslo']
// ])
// console.log(countriesMap.get('Finland')) // Helsinki
// console.log(countriesMap.get('Sweden')) // Stockholm
// console.log(countriesMap.get('Nepal')) // undefined
// console.log(countriesMap.has('Nepal')) // false
// console.log(countriesMap.size) // 3
// console.log(countriesMap.keys()) // MapIterator {'Finland', 'Sweden', 'Nor
// console.log(countriesMap.values()) // MapIterator {'Helsinki', 'Stockholm', 'Oslo'}

// Deleting values from the map
// const countriesMap = new Map([
//   ['Finland', 'Helsinki'],
//   ['Sweden', 'Stockholm'],
//   ['Norway', 'Oslo']
// ])
// countriesMap.delete('Finland')
// console.log(countriesMap.size) // 2
// console.log(countriesMap.has('Finland')) // false
// console.log(countriesMap) // Map(2) {'Sweden' => 'Stockholm', 'Norway' => 'Oslo'}
// console.log(countriesMap.clear()) // undefined
// console.log(countriesMap.size) // 0
// console.log(countriesMap.has('Finland')) // false
// console.log(countriesMap) // Map(0) {}

// Looping a map
// const countriesMap = new Map([
//   ['Finland', 'Helsinki'],
//   ['Sweden', 'Stockholm'],
//   ['Norway', 'Oslo']
// ])
// for (const country of countriesMap) {
//   console.log(country)
// }
// for (const [country, city] of countriesMap) {
//   console.log(country, city)
// }



