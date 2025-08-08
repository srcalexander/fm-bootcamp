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
