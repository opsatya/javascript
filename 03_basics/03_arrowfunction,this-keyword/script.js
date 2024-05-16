//this keyword is used to access the current contex variables   //{}this is current contax simply blocks 
//curent contex ko refer karta hai 
// context matlab value , let user{
    
let user = {
   username : "satya",
   price : 999,

   greet:  function (){
     console.log(`${this.username} WELOCME TO THE WEBSITE`);

    //  console.log(this);   
   }
}
// user.greet()
// user.username = "harish"
// user.greet()


/* browser ka global object windows hota hai imp hai interview me pucha jata hai 
 jab ham node enviroment this print karte hai to {} empty objet return karta hai lekin ham agar ye browser pe run kare to hame window global object milta hai, aur ye blank object{} isiliye mil raha hai kuki globally hamne kuch bhi decleare ya print nahi kiya hai */

//console.log(this);


// function ke andar this keyword kam nahi karta hai 
// function coffee (){
//     let name =  "satya";
//     console.log(this.name);
// }
   
//     let coffee  = function(){
//     let name =  "satya";
//     console.log(this.name);
// }   // yaHa per bhi same as simple function 

//     let coffee  = ()=> {
//     let name =  "satya";
//     console.log(this.name);
// }   // yaHa per bhi same as simple function 


// explict arrow function
// let saymyname = (num1,num2)=>{
// return num1+ num2
// }

// implict arrow function

// let saymyname = (num1,num2) => num1 +num2 
//  let saymyname = (num1 , num2) => (num1 +num2) // jab ham simple bracket use karte hai tab hame explicitly return keyword use karne ki jarurat nahi padti

//let saymyname = (num1 , num2) => ({name : "satya"})  // agr hame implicitly arrow function ke sath object ko pass karna ho tab  
console.log(saymyname(15,15));
