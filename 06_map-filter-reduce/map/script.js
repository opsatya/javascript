const mynumbers = [1,2,3,4,5,6,7,8,9,10]

//const newnums = mynumbers.map( (num)=>{
  //  return num+10
//})

// const newnum = []
// mynumbers.forEach( (num) =>{
//     newnum.push( num+10 ) 
// })
// console.log(newnum);

// chaining matlab at a time multiple function use kar sakte hai 
//jaisse mynumbers.map().map().filter()

// filter sirf true value return karta hai basically kuch conditon apply kar sakte hai through the filter method

let newnum = 
             mynumbers.map((num)=>{
                return num*10
             })
             .filter((num)=>{     // iske andar jo chined array  means jo iise pahle wala array hai uske value ayenge aur usi value pe ham agee ke task perform karenge
                return num >=30
             })
console.log(newnum);

