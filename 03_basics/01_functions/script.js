    // main use of function is use to wrte less code in effician way
    function saymyname ()
    {
        console.log("S");
        console.log("A");
        console.log("T");
        console.log("Y");
        console.log("A");
    }
//  saymyname()    // saymyname is refernce and () using this bracket we exctue the function
// jab bhi ham function ki defination banate hai and uske andar jo bhi ap input lete hai use kehte hai parameters in this casee num1,num2 are parameters
//   function Addtwonumber (num1,num2){
//      console.log(num1+num2);
//   }
function Addtwonumber (num1,num2){
    //  let add = num1+num2;
    //  return add
  return num1 +num2;
   //return line ke bad ka koi bhi code unreacheble code hota hai 
   //console.log("satya");   // unreachable code

  }
 const result =  Addtwonumber(10,10)
 //console.log(result);


 function sayhello(username){
    if(!username){    // ye expression equeal hai username === undefiend
        console.log("please enter a name");
        return
    } 
   return `${username} Just Logged in`
 }
 //console.log(sayhello("ramesh"))
 //console.log();  

 function restoperator (...num) {   // using rest operator we can store more than one value in that parameter
    return num
  
  }
//  console.log(restoperator(12,14,2,45,5,56,21,34,45,56,));
 
function restoperator (val1,val2,...num) {   // using rest operator we can store more than one value in that parameter
    return num
  
  }
//  console.log(restoperator(12,14,2,45,5,56,21,34,45,56,));

let createuser = {
    name : "satya",
    age : 19

}

function handleobject(newuser){
  console.log(`name: ${newuser.name} age:${newuser.age}`);
}
//handleobject(createuser);

// handleobject({
//     name :"satyayt", 
//     age : 21   
//     // we can pass as a  variable name and as in while passing an argument also we can pass the whole object 
   
// })


let myarr = new Array(100,200,300,400,500)

function returnarray(newarr){
    console.log(`new array is ${newarr[1]}`);
}

// returnarray(myarr)

// returnarray([
//     100,300,400,600  // we can pass as a  variable name and as in while passing an argument also we can pass the whole array 
// ])
 