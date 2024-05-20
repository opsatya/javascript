const coding =["js","python","cpp","ruby","java"]

// coding.forEach((value)=>{
//   console.log(value);
// })

// coding.forEach(function(value){
// console.log(value);
// })

// function printme(item){
//   console.log(item);
// }

// coding.forEach(printme)


// coding.forEach( (item,index,array)=>{
// console.log(item,index,array);
// })


const mycoding = [
    {
        "languangename" : "java script",
        "language file name":"js"
    },
    {
        "languangename" : "java",
        "language file name":"java"
    },
    {
        "languangename" : "python",
        "language file name":"py"
    }
]

mycoding.forEach( (item)=>{
   console.log(item.languangename);
})
