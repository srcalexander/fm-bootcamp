/* 
Task:
Write a JavaScript program that:

1. Starts with the array:
   const prices = [4.99, 9.5, 2.75, 12, 6.3];

2. Uses .map() to create a new array where each price is increased by 20% (tax).

3. Uses .push() to add the price 0.99 to the taxed array.

4. Uses .reduce() to find the total cost of all prices in the updated array.

5. Prints:
   - The array of prices after tax
   - The array after adding 0.99
   - The total cost
*/

const prices = [4.99, 9.5, 2.75, 12, 6.3];

function inflate(prices) {
   return prices.map(function (price) {
      return price * 1.2;
   });
}

let inflated = inflate(prices);

console.log(inflated);

inflated.push(0.99);

console.log(inflated);

function sum(inflated) {
   return inflated.reduce(function (total, current) {
      return (total += current);
   }, 0);
}

let summed = sum(inflated);
console.log(summed);
