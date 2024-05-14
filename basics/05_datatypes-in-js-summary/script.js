
// notes
// kis tarh se data ko memory me rakha jata hai and kis tarh se data ko access kiya jata hai usu bases pe datatype ke 2 categarious hai 
// 1) prmitive/value-type/pre-defined
// 7 types
// string ,number ,boolean, null, undefined ,symbol ,big int


let num = 18
let num1 = 13.67 // num num1 both are numbers isme decimal value ko bhi number hi consider kiya jata hai
let name = "hello"
let ispass = true;
let temp = null; //(null matlab ye nahi ki usme 0 hai ,  wo puri tarh khali hai bass)
let isemail; 

let byname = Symbol("shibbu") // symbol ye dono value agar same bhi hue to bhi hamne use symbol ke wrap kiya hai isiliye both are differnt
let nickname = Symbol("shibbu")
//console.log(lastname === nickname);
let big = 8453673456756549675n;
console.log(typeof(big));


// 2) non-primitive/refernce-type/user-defined
// array 
// object
// function


let arr = [1,2,3,4,5]
let myobj = {
    name: "satya",
    age : 19
}
let myfunction = function    (){
console.log("hello World");
}
myfunction()


/* when we use typeof operator on datatypes what types are going to return
   return types of variable in js 
primitive 

string =>string
number => number
boolean => bolean
null => object 
undefiend => undefiend
symbol => symbol
bigint => bigint

non primitive
array => object 
function => function 
object => object 
/*
javascript is dynamicly typed language or staticlly  typed language?
ans =>

JavaScript ko dynamically typed language kaha jata hai kyunki isme variables ki types runtime (program execute hone ke dauran) pe decide hoti hain, compile time pe nahi. Matlab, aapko variable declare karte waqt uski type specify karne ki zarurat nahi hoti. Yeh runtime pe decide hota hai ki variable ka data type kya hoga, aur uske hisaab se usko handle kiya jata hai.

java script is dynamic typed language beacuse we do not have to definde the datatype of the value 
for ex let name ="satya"  // its a string value par hamne specificcly defiend nahi kiya ki ye string hai 
*/