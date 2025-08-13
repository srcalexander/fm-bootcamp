let countries = ["United Kingdom", "Spain", "Ecuador", "Germany", "France", "South Korea", "Japan", "New Zealand", "Thailand"];

function countryInfo(countries) {
   return countries.map(function (country) {
      return { Name: country, Letters: country.length, Loud: country.toUpperCase() };
   });
}

countries = countryInfo(countries);
console.log(countries);

let oneArr = [];

function count(countries) {
   let counter = 0;
   countries.forEach(function (country) {
      counter++;
      oneArr.push(1);
   });
   return counter;
}

let counter = count(countries);
console.log(counter);
console.log(oneArr);

let addOneArr = oneArr.reduce(function (total, current) {
   return (total = total + current);
}, 0);

console.log(addOneArr);
