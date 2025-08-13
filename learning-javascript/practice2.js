/* Here’s a task that uses only what you’ve learned so far:
Task:
Write a JavaScript program that:

1. Takes an array of words:
const words = ["hello", "world", "this", "is", "javascript", "practice"];

2.Converts each word to uppercase.

3.Joins them into a single string with spaces between words.

4. Prints the length of the final string.

Requirements:
Use .map() for the uppercase conversion.
Use .join() for combining. */

const words = ["hello", "world", "this", "is", "javascript", "practice"];

function loudWords(words) {
   return words.map(function (word) {
      return word.toUpperCase();
   });
}

let loud = loudWords(words);
console.log(loud);

let sentence = loud.join(" ");

console.log(sentence);

console.log(sentence.length);
