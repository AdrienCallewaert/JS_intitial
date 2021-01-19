const readlineSync = require("readline-sync");
let nombre1 = new Number(readlineSync.question('choose a number with a decimal: '));
console.log(nombre1);

let nombre2 = new Number(readlineSync.question('choose a second number with a decimal: '));
console.log(nombre2);

let solution = (Math.trunc(nombre1)) + nombre2;

console.log('the solution is ' + solution + ' !');