const readlineSync = require("readline-sync");
var age = new Number(readlineSync.question('Your age : '));
if(age>17){
    console.log('adult');
}else{
    console.log('kid');
}