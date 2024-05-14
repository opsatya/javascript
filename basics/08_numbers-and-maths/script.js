let score = 400; 

//console.log(score);

let balance = new Number(100)    
// we expilicitily converted the data type of number to use more method 
let newbal = balance.toString()
//console.log(newbal);
//console.log(typeof(newbal)); 
//console.log(balance.toFixed(2));

const othernum = 123.86435
//console.log(othernum.toPrecision(4)); //The toPrecision() method of Number values returns a string representing this number to the specified precision. 

const valnum = 100000
//console.log(valnum.toLocaleString());  // to change in india currency ('en-IN')

//****************************************************Maths**************************************

// console.log(Math.abs(-5)); // negitive value ko positive me convert karta hai and postive ko postive hi rakhta hai 
// console.log(Math.round(3.8)); // decimal value ko hata kar roundup karke deta hai
// console.log(Math.ceil(4.2));   
// console.log(Math.floor(4.9)); 
// console.log(Math.max(1,2,4,5));
// console.log(Math.min(1,2,4,5));

//console.log(Math.random());  // o se 1 ke bich me random no print karega 

console.log((Math.random()*10)+1);  // 10 se multiply karne se ek no shift ho gaya           for ex 0.56456366546 after multiplying with 10 it turns into 5.6456366546. but in some case as we random number prints in between 0 to 1, it is possible ki wo 0.054545456 aise no bhi print kare to is case ko handle karne ke liye ham (+1) ka use kar sakte hai jiise (0) value ayegi hi nahi
console.log(Math.floor(Math.random()*6)+1);
// aur phir as we know floor ka use number me se choti value print karne ke liye and roundof  karne ke liye use karte hai for ex 3.44546, ya 3.8645556 aisa rehne de wo decimals ko hata ke minimum value return kar dega in this case we got number(3) in both cases

let min = 10
let max = 20
console.log(Math.floor(Math.random()*(max-min+1))+ min);