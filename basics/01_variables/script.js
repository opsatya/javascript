const pi = 3.14;
let fullname = "satya"
var age = 19
height = "180";
let email;
//pi = 45.50  // not allowed , constant ki value change nahi kar sakte 
fullname = "ramesh"
age = 46
height = "120"
console.log(pi);
/*
perfer to not use var
beacuse of issue block scope and functional scope
*/
console.table([fullname,age,height,email]);                       

/*
notes 
about variables 
1. const cant be redeclere or reassigned (block scope)
2. let can be reassigned but cant be redecleare (block scope)
3. var can be re-decleare and reassign (global scope)

=> never ever use var in your code because of block scope and function scope issue

console.table([])  to show the data in tabular form
 */