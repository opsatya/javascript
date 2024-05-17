// IIAF (imideate invoke function expression)
//iffe is used to invoke or run the function immditely
// to avoid the problem of global varible uses. means child function can use the parent so sometimes we dont want this 
// global scope ke pollution ko hatane ke liye hamne iifee ka use kiya
// we dont want the global scope pollution 

(function coffee (){
    // its a named iife
    console.log(`DB CONNECTED`);   
})()  // to invoke the function immedialy we wrap the function into simple barckets () and call that function immeditly 

//() iske andar hamne likha function defination ,and second wale me likha () function excution call


// ek file me 2 iife use karne ke liye hame ; ka use karna padega usko ye pata hi nahi hai ki usse apna contex kab rokna hai use situation me ham ; ka use karenge 
((name = "brroh")=>{
    console.log(`DB CONNECTED ${name}`);
})()
