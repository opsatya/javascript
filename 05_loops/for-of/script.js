    // for of loop
    //["","",""]
    //[{},{},{}]

    // const arr = [1,2,3,4,5]
    // for (const num of arr) {
    //   //  console.log(num);
        
    // }

    // const greeting = "hello World";
     
    // for (const greet of greeting) {
    //     if(greet === " "){
    //         continue;
    //     }
    //     console.log(`each letter is ${greet}`);
        
    // }


// map
//it store the key value pair jisu like object but the main difference is map stores only unique value it does not contain duplicate value
// map pe iteration nahi hota hai using these for method 
const map = new Map()
map.set('in',"india")
map.set('usa',"united states of america")
map.set('fr',"france")
map.set('fr',"france")  // not print beacuse it is repeted
//console.log(map);

for (const [key,value] of map) {
   console.log(`keys and values: ${key} => ${value}`);
}

const myobj = {
    'game1': "call of duty",
    'game2': "battle ground india"
}
for (const [key,value] of myobj) {
 //   console.log(key,value);
} // object for-of method se iterate nahi karega uske liye alaag method hote hai
// for of use karenge ham arrays ke liye
