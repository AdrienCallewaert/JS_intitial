const readlineSync = require("readline-sync");
let nombre1 = new Number(readlineSync.question('choose a integers: '));
console.log(nombre1);

let nombre2 = new Number(readlineSync.question('choose a second integers: '));
console.log(nombre2);

let solution = nombre1 % nombre2;

console.log('the solution is ' + solution + ' !');