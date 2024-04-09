1; /* charAt(index)
 Returns the character at the specified index. 
 */
let str1 = "Hello";
console.log(str1.charAt(1)); // Output: "e"
// ******************************** End ******************************** //

2; /* charCodeAt(index)
Returns the Unicode value of the character at the specified index.
 */
let str2 = "Hello";
console.log(str2.charCodeAt(1)); // Output: 101
// ******************************** End ******************************** //

3; /* concat()
Combines two or more strings.
  */
let str3 = "Hello";
let str4 = " World";
console.log(str3.concat(str4)); // Output: "Hello World"
// ******************************** End ******************************** //

4; /*  includes()
Checks if a string contains a specified substring.
  */
let str5 = "Hello, World!";
console.log(str5.includes("World")); // Output: true
// ******************************** End ******************************** //

5; /* indexOf()
Returns the index of the first occurrence of a specified value in a string.
 */
let str6 = "Hello, World!";
console.log(str6.indexOf("World")); // Output: 7
// ******************************** End ******************************** //

6; /* lastIndexOf()
Returns the index of the last occurrence of a specified value in a string.
  */
let str7 = "Hello, World!";
console.log(str7.lastIndexOf("o")); // Output: 8
// ******************************** End ******************************** //

7; /* match(regexp)
Searches a string for a match against a regular expression and returns the matches as an array.
  */
let str8 = "The rain in Spain";
console.log(str8.match(/ain/g)); // Output: ["ain", "ain"]
// ******************************** End ******************************** //

8; /*  replace()
Searches for a substring (or regular expression) in a string and replaces the first occurrence.
  */
let str9 = "Hello, World!";
console.log(str9.replace("World", "John")); // Output: "Hello, John!"
// ******************************** End ******************************** //

9; /* replaceAll(searchValue, replaceValue)
Replaces all occurrences of a substring (or regular expression) in a string.
  */
let str10 = "apple, apple, orange, apple";
console.log(str10.replaceAll("apple", "banana")); // Output: "banana, banana, orange, banana"
// ******************************** End ******************************** //

10; /* slice(start[, end])
Extracts a section of a string and returns a new string.
  */
let str11 = "Hello, World!";
console.log(str11.slice(0, 5)); // Output: "Hello"
// ******************************** End ******************************** //

11; /* split(separator[, limit])
Splits a string into an array of substrings based on a specified separator.
  */
let str12 = "apple,orange,banana";
console.log(str12.split(",")); // Output: ["apple", "orange", "banana"]

// ******************************** End ******************************** //

12; /* substring(indexStart[, indexEnd])
Extracts characters from a string between two specified indices.
  */
let str13 = "Hello, World!";
console.log(str13.substring(0, 5)); // Output: "Hello"
// ******************************** End ******************************** //

13; /* toLowerCase()
Converts all the characters in a string to lowercase.
  */
let str14 = "Hello, World!";
console.log(str14.toLowerCase()); // Output: "hello, world!"

// ******************************** End ******************************** //

14; /* toUpperCase()
Converts all the characters in a string to uppercase.
  */
let str15 = "Hello, World!";
console.log(str15.toUpperCase()); // Output: "HELLO, WORLD!"
// ******************************** End ******************************** //

15; /* trim()
Removes whitespace from both ends of a string.
  */
let str16 = "   Hello, World!   ";
console.log(str16.trim()); // Output: "Hello, World!"
// ******************************** End ******************************** //
