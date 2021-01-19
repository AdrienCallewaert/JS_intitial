const readlineSync = require("readline-sync");
let nombre1 = new Number(readlineSync.question('your shoe size : '));
console.log(nombre1);

let nombre2 = new Number(readlineSync.question('your birth year: '));
console.log(nombre2);

let solution1 = nombre1 * 2 + 5;
let solution2 = solution1 * 50 - nombre2;
let solution3 = solution2 + 1766;

console.log('the solution is ' + solution3 + ' !');