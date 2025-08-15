names = ["bob", "alice", "william", "alex", "fred"];

function countNames(names) {
   let counter = 0;
   names.forEach(function (name) {
      counter++;
   });
   return counter;
}

counter = countNames(names);
console.log(counter);
