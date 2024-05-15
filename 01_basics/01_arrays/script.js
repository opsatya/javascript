
let shop = ["shirt", "jeans", "tshirts", "shoes", "watch"]
//console.log(shop);
//let myarr = [1,2,3,4,true,undefined,null,function(){}, "satya"]   // aisa nahi hai ki sirf ek hi type ka data store kar sakte hai ,we can store differnt differnt datatype value 
let newarr = new Array("shirt", "jeans", "tshirts", "shoes", "watch")

// console.log(shop.indexOf("jeans"));
// console.log(shop[1]);

// shop.push("sneakers")   add at last 
// shop.pop()              remove from last
 
// shop.unshift("sneakers")  always at 1st number 
// shop.shift()              remove from the first number

//console.log(shop.includes("tshirts"));   // to chake the values are present or not in array 
//console.log(shop.indexOf("jeans"));

const cart = shop.join()
//console.log(shop);
//console.log(cart);  // array same print hoga but yaha per array ka datatype change ho jayga
//console.log(typeof(cart));


let myarr = [1,2,3,4,5]
console.log("A:",myarr);

console.log(myarr.slice(1,3));  // ye sirf array ki copy return karta hai jo hamne section print ke liye bola hai for ex 1,3 basiccily subpart of the array (remember it returns just copy)
console.log("B:",myarr);

console.log(myarr.splice(1,3));  // ye actual array ko manipulate kar raha hai. usi array ke ander se part cut kar ke de raha hai thats the first and big difference and the second one is it include also include the last index what we give  
console.log("C:",myarr);    // remain 1,5








/*
arrays is coolction of multiple item and stored in one single variable
arrays can be resizeable 
arrays can have different datatypes value
arrays follow the 0 based indexing
js arrays are not associative array , and so array elements cannot be accesed using attribute strings as indexs 
for ex
console.log(shop[one]));

array ke sath jab bhi copy operation karenge to ye shallow copy banata hai

shallow Copy 
a shallow copy of an object is a copy whose properties there the same refernce points

deep copy 
a deep copy do no share the reference point 
*/