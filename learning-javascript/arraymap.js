let farenheits = [32, 45, 50, 60, 72, 85, 90, 100];
farenheits.push(31);

function celsiusArr(farenheits) {
   return farenheits.map(function (farenheit) {
      return Math.round((farenheit - 32) * (5 / 9));
   });
}
let celcius = celsiusArr(farenheits);

console.log(`The temperatures in farenheit are ${farenheits}`);
console.log(`The temperatures in celsius and rounded are ${celcius}`);
