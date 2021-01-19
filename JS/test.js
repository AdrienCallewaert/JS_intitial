const readlineSync = require("readline-sync");
let nombre1 = new Number(readlineSync.question('choose a number'));

let nombre2 = new Number(readlineSync.question('choose a second number'));

let solution = nombre1 % nombre2;

console.log('the solution is ' + solution + "!");