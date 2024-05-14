// let age = null; 

// console.log(typeof(age));   // actually typeof() return object in case of null

// let newval = Number(age)

// console.log(typeof(newval));  // in null case return number beacuse of the conversion
// console.log(newval);          // in null case return 0

/*
notes 
"19" => 19
"19xyz" => NaN
true => 1; false => 0
undefined => NaN
*/

// let isloggedin = ""

// let booleanisloggedin = Boolean(isloggedin)

// //console.log(booleanisloggedin);

// // 1 => true; 0 => fasle
// // "" => false "satya" => true


// let num = 19
// let stringnum = String(num)
// console.log(stringnum);
// console.log(typeof(stringnum));


// ********************************** Operations *********************************

let value = 2
let negitivevalue = -value;
//console.log(negitivevalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%2);
// console.log(2**2);

let str1 = "shivam"
let str2 = "singh"

let str3 = str1+ " "+str2;
// console.log(str3);   // string concatation operation

// console.log(1 + "2"); // 12
// console.log("1" + 2);  // 12
// console.log(1 + 2 +"3");  // in this case 1+2 = 3 and then 3 + "3" = 33 
// console.log("1" + 2 +3); // 123

// console.log(+true);
// //console.log(true+);  // syantax error
// console.log(+"");  // return false

let points = 100
// points++
//++points


let x= 5;
console.log(x++);   // ye line print karega 5 koo 
console.log(x);     // ye increment karega 


let y = 5; 
console.log(++x);  // yaha per 6 print ho jayga 
console.log(x);  

/*x++: Purani value pehle use hoti hai, phir increment hota hai.
++x: Pehle increment hota hai, fir new value use hoti hai.
x--: Purani value pehle use hoti hai, phir decrement hota hai.
--x: Pehle decrement hota hai, fir new value use hoti hai.*/