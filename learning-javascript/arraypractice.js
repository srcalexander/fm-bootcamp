let dogs = ["spaniel", "pug", "boxer", "lab", "bulldog", "tosa", "rottweiler"];

function fiveOrMoreLetters(dogs) {
   let counter = 0;
   let longDog = [];
   dogs.forEach(function (dog) {
      if (dog.length >= 5) {
         counter += 1;
         longDog.push(dog);
      }
   });
   return { counter, longDog };
}

let { counter, longDog } = fiveOrMoreLetters(dogs);
console.log(counter);
console.log(longDog);

function dogInfo(dogs) {
   return dogs.map(function (dog) {
      return { name: dog, length: dog.length };
   });
}

let info = dogInfo(dogs);
console.log(info);
