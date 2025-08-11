// adds up all numbers above 10
let numbers = [1, 3, 11, 2, 7, 24, 67, 41, 3, 9, 14, 56, 4, 9, 44];

function sum(numbers) {
   let total = 0;
   numbers.forEach(function (number) {
      if (number > 10) {
         total += number;
      }
   });
   return total;
}

let total = sum(numbers);
console.log(total);

let fruits = ["apple", "banana", "orange", "pear"];

function countFruits(fruits) {
   counter = 0;
   fruits.forEach(function (fruit) {
      counter += 1;
   });
   return counter;
}

console.log(counter);

function loudFruits(fruits) {
   return fruits.map(function (fruit) {
      fruit = fruit.toUpperCase();
      return fruit;
   });
}

let lFruits = loudFruits(fruits);
console.log(lFruits);

function toList(lFruits) {
   lFruits = lFruits.join("   ");
   return lFruits;
}

lFruits = toList(lFruits);
console.log(lFruits);
