let fruits = ["  APPLE ", "LIME", "BANANA", "  CHERRY ", "DATE", "ELDERBERRY", "FIG ", "GRAPE", "  HONEYDEW "]; //An array of fruits in upper case and some leading spaces

function cleanArr(fruits) {
   // function to clean the array
   return fruits.map(function (fruit) {
      // iterates through the array
      fruit = fruit.trim(); // removes the leading spaces
      fruit = fruit.toLowerCase(); // turns each fruit name to lower case
      return fruit; // returns the new value
   });
}

let cleanFruits = cleanArr(fruits); // call the cleanArr function and stores the result in the cleanFruits array

console.log(cleanFruits); // logs the cleanFruits array in the console

function lettersCount(cleanFruits) {
   // fucntion to count the letters in each fruit
   let counter = 0; // sets the counter for the number of fruit items with more than 4 letters to 0
   cleanFruits.forEach(function (cleanFruit) {
      // iterates through the array
      if (cleanFruit.length > 4) {
         // checks to see if there are more than 4 letters
         counter += 1; // if yes, adds 1 to the counter
      }
   });
   return counter; // returns the counter value
}

let counter = lettersCount(cleanFruits); // calls the function to count the letters
console.log(`There are ${counter} fruits with more than 4 letters`); // logs the counter result to the console

function toUpper(cleanFruits) {
   // function to convert the fruit to upper case if it has more than 4 letters
   return cleanFruits.map(function (cleanFruit) {
      // iterates over the array
      if (cleanFruit.length > 4) {
         // checks if length is more than 4 letters
         cleanFruit = cleanFruit.toUpperCase(); // if yes, the value is converted to upper case
      }
      return cleanFruit; // returns the value
   });
}

let newFruits = toUpper(cleanFruits); // calls the function and saves the result to a new array called newFruits
console.log(newFruits); // logs the newFruits array to the console

function toList(cleanFruits) {
   // function to turn the array into a string
   list = cleanFruits.join(";"); // marks the delimiter as a semicolon
   return list; // returns the list
}

toList(newFruits); // calls the function
console.log(list); // logs the string list to the console
