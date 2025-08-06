let age;
let message;

function double(x) {
   age = x * 2;

   if (age > 100) {
      message = " is older than 100!";
      return age;
   }

   if (age === 100) {
      message = " is really old!";
      return age;
   } else {
      message = " is less than 100";
      return age;
   }
}

double(60);
console.log(age + message);

const firstName = "Will";
const lastName = "Jones";
const fullName = firstName + " " + lastName;
let greeting = "Hi there " + fullName + ", welcome!";
console.log(greeting);

greeting = `Hi there ${fullName}, welcome!!`;
console.log(greeting);

function upperCase(n) {
   n = n.toUpperCase();
   return n;
}
let word = "alex";
word = upperCase(word);
console.log(word);

function lowerCase(n) {
   n = n.toLowerCase();
   return n;
}
word = "aLeX";
word = lowerCase(word);
console.log(word);

function length(n) {
   n = n.length;
   return n;
}

length = length(word);
console.log(`'${word}' has ${length} characters`);
