let username = []
if(username){
    console.log("mil gaya bhai tera email");
}
else{
    console.log("nahi hai bhai tera email");
}

// falsy value
//undefined,null,false,"",0,-0,BigInt(0n),NaN
//truthy value
// "0",'false'," ", function(){}, [], object 

if(username.length === 0){
    console.log(`array is empty`);
}
else{
    console.log(`value hai bhai array mee`);
}

let myobj = {}
if(Object.keys(myobj).length === 0){
    console.log(`empty object`);
}
else{
    console.log(`some thin in object`);
}

// nullish coalescing operator (??):null,undefiend

let val1;
val1 =  5 ?? 10
//val1 = null ??5
//val1 = undefiend ?? 10
// val1 = null ?? 20 ?? 10
console.log(val1);

// ternary operator
// condition ? true :false
 let iceteaprice = 100;
 iceteaprice >=80 ? console.log("more than 80") : console.log("less than 80");

let age = 21;
age >=18 ? console.log("bhai vote kar dee") :console.log("baccha hai be abhii");