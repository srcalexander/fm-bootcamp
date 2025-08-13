/* 
Task:
Write a JavaScript program that:

1. Starts with the array: 
   const numbers = [5, 10, 15, 20, 25];

2. Uses .map() to create a new array where each number is doubled.

3. Uses .push() to add the number 100 to the end of the doubled array.

4. Uses .reduce() to find the sum of all numbers in the updated array.

5. Prints:
   - The doubled array
   - The array after adding 100
   - The sum of all numbers
*/

const numbers = [5, 10, 15, 20, 25];

function doubleNumbers(numbers) {
   return numbers.map(function (number) {
      return number * 2;
   });
}

let doubled = doubleNumbers(numbers);
console.log(doubled);

let doubled100 = doubled.slice();
doubled100.push(100);

console.log(doubled100);

let added = doubled100.reduce(function (total, current) {
   return (total += current);
}, 0);

console.log(doubled);
console.log(doubled100);
console.log(added);
