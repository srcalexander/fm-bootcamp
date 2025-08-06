function sum(x, y) {
   console.log(`The answer is ` + (x + y));
   return x + y;
}

function divide(x, y) {
   console.log(`The answer is ` + x / y);
   return x / y;
}

function multiply(x, y) {
   console.log(`The answer is ` + x * y);
   return x * y;
}

function subtract(x, y) {
   console.log(`The answer is ` + (x - y));
   return x - y;
}

function run(operation, x, y) {
   if (operation === "sum") {
      return sum(x, y);
   }

   if (operation === "divide") {
      return divide(x, y);
   }

   if (operation === "multiply") {
      return multiply(x, y);
   }

   if (operation === "subtract") {
      return subtract(x, y);
   }
}

run("sum", 1, 2);
run("divide", 12, 3);
run("subtract", 10, 3);
run("multiply", 4, 3);
