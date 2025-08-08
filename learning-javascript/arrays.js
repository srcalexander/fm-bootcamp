let years;
years = [2002, 2003];
console.log(years);

//

function getFirstNumber(numbers) {
   let firstNumber = numbers[0];
   console.log(firstNumber);
   return firstNumber;
}

getFirstNumber([10, 12, 13]);

//

function getIndex(position, numbers) {
   index = position - 1;
   result = numbers[index];
   message = `In position ${position} is the number ${result}`;
   console.log(message);
   return result;
}

getIndex(5, [1, 2, 5, 8, 11, 20, 35]);

//

let grades = [];

function addGrade(grade) {
   grades.push(grade);
   return grades;
}

addGrade(4);
addGrade(5);
addGrade(9);
console.log(grades);

function includedGrade(grade) {
   let included = grades.includes(grade);
   console.log(included);
   return included;
}

includedGrade(5);

function toCSV(grades) {
   let csv = grades.join(";");
   console.log(csv);
   return csv;
}

toCSV(grades);

function firstGrade(grades) {
   first = grades[0];
   console.log(first);
   return first;
}

firstGrade(grades);

function lastGrade(grades) {
   last = grades[grades.length - 1];
   console.log(last);
   return last;
}

lastGrade(grades);
