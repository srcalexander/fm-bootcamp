let age = 20;

function double(age) {
   age = age * 2;
   return age;
}

age = double(age);
console.log(age);

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
