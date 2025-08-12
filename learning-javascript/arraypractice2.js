let countries = ["United Kingdom", "Spain", "Ecuador", "Germany", "France", "South Korea", "Japan", "New Zealand", "Thailand"];

function countryInfo(countries) {
   return countries.map(function (country) {
      return { Name: country, Letters: country.length, Loud: country.toUpperCase() };
   });
}

countries = countryInfo(countries);
console.log(countries);
