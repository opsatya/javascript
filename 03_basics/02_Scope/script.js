let a = 100   // global scope 
if(true){
    let a = 10  // local cope 
    const b = 20
    var c = 30  
    console.log("inner",a);
}


console.log(a); // we cannot access the a beacuse a is in the scope 
//console.log(b);   we cannot access the b beacuse b is in the scope 
//console.log(c);     we can access the c beacuse  we declere c with the var keyword so its create the problem while programming  


// windows ke scope and node ke scope alag hai 