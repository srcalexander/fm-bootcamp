let scores = [9, 12, 8, 6, 22, 7, 33, 40, 4, 11, 6, 13];
let passingScores = [];
let passingTotal = 0;

scores.forEach(function (score) {
   console.log(score);
   if (score >= 10) {
      passingScores.push(score);
      passingTotal = passingTotal + score;
   }
});

console.log(`The passing scores are ${passingScores}`);
console.log(`The passing total is ${passingTotal}`);

let passingAverage = passingTotal / passingScores.length;
console.log(`The passing average is ${passingAverage}`);

function toCSV(passingScores) {
   return passingScores.join(";");
}

let csv = toCSV(passingScores);
console.log(csv);
