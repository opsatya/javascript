// Singletone
// object Constroctor Return Singleton 
//Object.create() // object Constructor


let newsym = Symbol("supra")   // interwiver ask ki sumbol ko as a key object me kaise use karte hai 
// object Literals
    let user = {    
    name: "satya",  
    "fullname" : "satya Singh" ,// to ab ham isse . operator ka use karke access nahi kar sakte isiliye square notation ka use karna chaiye
    age : 19, 
    location : "pune",
    email : "satya@google.com",
    isloggedin : true,
    lastlogin: ["monday","friday"],
    [newsym]:"rolls Royals"
}

//1st way
//console.log(user.age);
//2nd way
//console.log(user["age"]);  // keys are stored as string in behind

//console.log(user[newsym]);  // correct way to use and initilize a syblol in object as a key is this 

user.email = "satya@chatgpt.com"  // way to change the value of keys

//Object.freeze(user)  // what if ap chate ho ki apki object ki value change hi na ho in that case we are going to use freez method
user.email = "satya@microsoft.com"
//console.log(user);

user.greeting = function(){
    console.log("hello whatssapp");
}
user.Usergreeting = function(){
    console.log(`whatssapp ${this.name}`);
}
console.log(user.greeting());
console.log(user.Usergreeting());