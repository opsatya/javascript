// reduce use accumalator and cuurent value
// it is basically used to reduced the value in the single value 
const mynum = [1,2,3,4]

// let reduced = mynum.reduce((acc,curr)=>{
//     console.log(`accval ${acc} and currval: ${curr}`);
//     return acc+curr
// }, 0) // yaha per jo bhi  value ham decleare karte hai wo value accumalter ko aa jati hai 
// console.log(reduced);


//let reduced = mynum.reduce((acc,curr)=>{
//     return acc+curr
// },0)
//console.log(reduced);

const shoppingcart = [
    {
        coursename : "js course",
        price : 1299
    },
    {
        coursename : "web dev course",
        price : 12999
    },
    {
        coursename : "java course",
        price : 8999
    },
    {
        coursename : "data science course",
        price : 19999
    },
]

let reduced = shoppingcart.reduce( (acc,item)=>{
    return acc+item.price
},0)
console.log(reduced);