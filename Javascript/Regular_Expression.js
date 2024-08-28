//----------------------------------------Regular Expressions-------------------------------------------------------------------

// Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects. These patterns are used with the exec and test methods of RegExp, and with the match, replace, search, and split methods of String. This chapter describes JavaScript regular expressions.
// The syntax of regular expressions is similar to that of the Unix shell. The pattern is enclosed in
// slashes, and placed at the end of a string. For example, the following code searches for the word

// 'hello' in a string:
// var str = "hello world";
// var patt = /hello/;
// var result = patt.test(str);
// console.log(result); // true

// Flags
// Flags are optional parameters in a regular expression which determine the type of searching. Let us see some of the flags:

// g: a global flag which means looking for a pattern in whole text
// i: case insensitive flag(it searches for both lowercase and uppercase)
// m: multiline


// Creating a pattern with RegExp Constructor
// let pattern = 'love'
// let flag = 'gi'
// let regEx = new RegExp(pattern, flag)


// RegExpp Object Methods
// const str = 'I love JavaScript'
// const pattern = /love/
// const result = pattern.test(str)
// console.log(result)


// Array containing all of the match

// match()
// const str = 'I love JavaScript'
// const pattern = /love/
// const result = str.match(pattern)
// console.log(result)

// search()
// const str = 'I love JavaScript'
// const pattern = /love/g
// const result = str.search(pattern)
// console.log(result)

// replace()
// const txt = 'Python is the most beautiful language that a human begin has ever created.\
// I recommend python for a first programming language'

// matchReplaced = txt.replace(/Python|python/, 'JavaScript')
// console.log(matchReplaced)

// Square Bracket
// const pattern = /[Aa]pple/g // this square bracket means either A or a
// const txt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. '
// const matches = txt.match(pattern)

// console.log(matches)  

// Escape character(\) in RegExp
// const pattern = /\d+/g  // d is a special character which means digits
// const txt = 'This regular expression example was made in January 12,  2020.'
// const matches = txt. match(pattern)

// console.log(matches)  // ["12", "2020"], this is not what we want

// One or more times(+)
// const pattern = /\d+/g  // d is a special character which means digits
// const txt = 'This regular expression example was made in January 12,  2020.'
// const matches = txt. match(pattern)
// console.log(matches)  // ["12", "2020"], this is not what we want

// Period(.)
// const pattern = /[a]./g  // this square bracket means a and . means any character except new line
// const txt = 'Apple and banana are fruits'
// const matches = txt.match(pattern)

// console.log(matches)  // ["an", "an", "an", "a ", "ar"]

// Zero or more times(*)

// const pattern = /[a].*/g  //. any character, + any character one or more times 
// const txt = 'Apple and banana are fruits'
// const matches = txt.match(pattern)

// console.log(matches)  // ['and banana are fruits']

// Zero or one times(?)
// const txt = 'I am not sure if there is a convention how to write the word e-mail.\
// Some people write it email others may write it as Email or E-mail.'
// const pattern = /[Ee]-?mail/g  // ? means optional
// matches = txt.match(pattern)

// console.log(matches)  // ["e-mail", "email", "Email", "E-mail"]


// Quantifier in RegExp
// const txt = 'This regular expression example was made in December 6,  2019.'
// const pattern = /\\b\w{4}\b/g  //  exactly four character words
// const matches = txt.match(pattern)
// console.log(matches)  //['This', 'made', '2019']

// Exact match
// let pattern = /^[A-Z][a-z]{3,12}$/;
// let name = 'Asabeneh';
// let result = pattern.test(name)

// console.log(result) // true

