let emaild = "satya @gmail .com "
let number = "45625645"

// console.log(firstname + lastname);
// use string interpoluation for conacating 
//console.log(`emaild is ${emaild} number is ${number}`);  // new way to print string or concate strings
// using bacticks variable inject karna assan ho jata hai 
// ye syantax jayda readable and jayda reliable hai 
//on the go method applay kar sakte hai 

// another way to decleare string 
 let classname = new String("TY BCA")

// console.log(classname[0]);
// console.log(classname.__proto__); 
// console.log(classname.length);   // to find the lenght of string
// console.log(classname.charAt(1));   // to see kon sa charcter kon se index per hai 
// console.log(classname.indexOf('T')); // to find the index no of paricular charcter
// console.log(classname.toLowerCase());

let newclasss = classname.substring(0,2)  // it is used to make string sliecs kind of basically string ka small part , it not accept negitive value  , last index ko include nahi karega 
console.log(newclasss);

let anotherclass = classname.slice(0,4)  // same as sub string but iske under negitive value bhi de sakte hai
console.log(anotherclass);

let newclass1 = '         satya        ';
console.log(newclass1);
console.log(newclass1.trim());  // trim only works on whitespaces and line terminators (\n)

let url = "satya%20singh@gmail.com"

console.log(url.replace('%20','-'));

console.log(url.includes("gmail.com"));

console.log(emaild.split(" "));