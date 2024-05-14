
// stack (primitive)  heap(non-primitive)

let myname = "satya";  
let nickname = myname;  // we got the copy of the myname variable
nickname = "shibbu"
console.log(nickname); 
console.log(myname);
/*
in stack memory or for primitive datatypes we got the copy of the variables 
in stack mermory (hamne kuch change kiya variable ke sath to copy variable ka chane hoga)

in heap memory or fro non primitive datatype we got the refernce of that object
in heap memory (hamne kuch change kiya object ke sath to wo actual object bhi change hoga)
*/

let myobj = {
    name : 'satya',
    age : 19,
    email : "satya@gmail.com",
    password : "satya!=satya"
}

let newobj = myobj
myobj.age = 20;
console.log(myobj.age);
console.log(newobj.age);