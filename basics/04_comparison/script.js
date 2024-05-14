// comparision operator
// console.log(2 == 1);
// console.log(2 >= 1);
// console.log(2 <= 1);
// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 != 1);


// console.log("2"> 1);
// console.log("0"> 1); 
/*
in this case we write a  number inside the double qotes so its basically a string but it change its datatype automatically 
so if we compare "2">1 = true 
*/

// lets see the null and undefined case
// console.log(null == 0); // false   
// console.log(null>=0); // true
// console.log(null>0);  // false 
/*
in 1st case it return false beacuse we use assigment operator(==) when we are using the assigment operator null works differntly  , yaha per null convert hoker 
(NaN) ban jata hai 

but in 2nd and 3rd case it returns ture and false beacuse we use comparesion operator(>,>=)  , when we use null with the comparision operator it works differantly , yaha per null convert hoker ban jata hai (0) 
*/

console.log(undefined ==0);  // false
console.log(undefined >=0);   // false
console.log(undefined >0);   // false

// strict equality operator
//(===)
console.log("2"==2); //true  (it chekes only the value)
console.log("2"===2); // false (beacue it cheke datatype also not only the value)