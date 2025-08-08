let numbers = [1, 3, 4, 16, 21, 2, 5, 31, 2, 8, 6, 19, 23, 6, 11, 2];

function calculateTotal(numbers) {
   let total = 0;
   numbers.forEach(function (number) {
      console.log(number);
      total += number;
   });
   return total;
}

let total = calculateTotal(numbers);
console.log(`The total is ${total}`);

function getAverage(total) {
   let average = total / numbers.length;
   return average;
}

let average = getAverage(total);
console.log(`There are ${numbers.length} numbers`);
console.log(`The average is ${average}`);
