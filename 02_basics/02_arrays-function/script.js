const marval =["thor","ironman","spiderman","blackpanther"]

const Dc = ["flash","batman","joker","Deadpool"]

//marval.push(Dc)   
//console.log(marval);
/*
when we use push us case me existing array me dusra array push kar deta hai for ex
[1,2,3[4,5]] ,[4,5] are another array but we use push so isne usi ke under push kar diya 
*/
// let allheros = marval.concat(Dc)
// console.log(allheros);
/*
but in the concat method ye ek new array return karta hai 
*/

let newarr = [...marval,...Dc]
//console.log(newarr);
/*we can also use spread operator for conacting the array yaha per ek postive side hai ki ham 2,3,4 array bhi spread karke print kar sakte hai sabki concat ke case sirf 1 hi*/

let anotherarray = [1,2,3,4,5,6,[7,8,9],10,[11,12,13,[14,15]]]

let newarray = anotherarray.flat(Infinity)  // infinity is bassicaly depth kitne depth tak spreadout karna hai , return a array with all with his subarray elemnt
//console.log(newarray);


console.log(Array.isArray([1,2,3,4]));  // true
console.log(Array.isArray("string")); // false
console.log(Array.from("string"));  // it converts the other datatypes into in array
console.log(Array.from({name:"satya"}));  // its an intresting case , returns blank array kuki hamne specify nahi kiya hai ki kiska array banana hai like keys ya values ka

let score1 = 10
let score2 = 20
let score3 = 30 
console.log(Array.of(score1,score2,score3));   //converts the array from the set of elements or returns aa new array from the set of elements