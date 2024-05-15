let username  = Object({name:"satya",age:19,})  // object createing using constroctor

let bummbleuser = {
}

bummbleuser.name = "lover Boy"
bummbleuser.age = "19"
bummbleuser.email = "laila-majnu@love.com"
bummbleuser.isloggedin = true

//console.log(bummbleuser);

let newuser = {
    email : "official@gmail.com",
    username:{
        fullname:{
            firstname : "satya",    // object nesting
            lastname : "Singh"
        }
    }
}

//console.log(newuser.username.fullname.firstname);

// agar hame alag alag object concate ya merge karna hai tab kya

let obj1 = {1:"a",2:"b"}
let obj2 = {3:"c",4:"d"}
let obj3 = {5:"e",6:"f"}

//et newobj = {obj1,obj2,obj3}
//let newobj = Object.assign(obj1,obj2,obj3)

let newobj = {...obj1,...obj2,...obj3}
//console.log(newobj);

let data =[
    {
     id : "101",
     password : "sasadadf"
    },
    {
        id : "102",
        password : "fgdfgdsf"
       },

       {
        id : "103",
        password : "sfghmhjutyr"
       }
]

//console.log(data[1].password);
//console.log(bummbleuser);
console.log(Object.keys(bummbleuser));   // in this line we got the converted array of an object
console.log(Object.values(bummbleuser)); // in this line we got the values
console.log(Object.entries(bummbleuser));