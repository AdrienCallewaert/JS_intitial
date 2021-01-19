const readlineSync = require("readline-sync");
var name = new String(readlineSync.question('1/3. your name: '));
var city = new String(readlineSync.question('2/3. your city: '));
var job = new String(readlineSync.question('3/3. your job: '));

console.log('Your story is: ' + name + ' lives in ' + city + ' and you live in ' + job + ' !');