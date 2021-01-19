const readlineSync = require("readline-sync");
var name = new String(readlineSync.question('your name: '));
var firstname = new String(readlineSync.question('your firstname: '));
var city = new String(readlineSync.question('your city: '));

console.log('Your name is ' + name + ' ' + firstname + ' and you live in ' + city + ' !');

