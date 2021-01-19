const readlineSync = require("readline-sync");
let userName = readlineSync.question('Can you give me your firstname & name please?');
console.log("Hello " + userName);