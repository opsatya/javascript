let a = 100   // global scope 
if(true){
    let a = 10  // block cope 
    const b = 20
    var c = 30  
    console.log("inner",a);
}
// we can access the global scope inside the block scope bu we cannot use the block scope outside the block (accpting var case ,thats why we dont use var) 

console.log(a); // we cannot access the a beacuse a is in the scope 
//console.log(b);   we cannot access the b beacuse b is in the scope 
//console.log(c);     we can access the c beacuse  we declere c with the var keyword so its create the problem while programming  


// windows enviroment ke scope and node enviroment ke scope alag hote hai 


//function inside function 

function one (){
    let username  = "satya yt"
    function two(){
     let  website  = "youtube"
     console.log(username);   // child function can acces the parent function variable
    }
     //console.log(website);  // ye out of the scope access kar rahe hai so errorr
     // two()
    }    


one()


if(true){
    const username = "satya"
    if(username === "satya"){
        const website = " youtube"
        console.log(username + website);
}
//console.log(website); // its throw a error beacuese it is outside of the scope

}
//console.log(username);  // its throw a error beacuese it is outside of the scope
// ander ka function bhar ke function ko access kar sakte hai 

// console.log(incresebyone(5))    we can access or print the function befor decleration but just in this syntax not in varibale function decleration.
// function incresebyone (num){
//     return num +1
// }

// incresebytwo(5)
// let incresebytwo = function(num){
//     return num +2
// }


