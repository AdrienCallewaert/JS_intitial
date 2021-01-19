const readlineSync = require("readline-sync");
var numbers1 = new Number(readlineSync.question('a numbers min : '));
var numbers2 = new Number(readlineSync.question('a numbers max : '));
var numbers3 = new Number(readlineSync.question('a current numbers : '));
if(numbers3>numbers2){
    console.log('wrong you are stupid');
}else if(numbers3<numbers1){
    console.log('wrong you are stupid');    
}else{
    console.log('ok bro, nice');
}
