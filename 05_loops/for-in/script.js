// for in me indexes print hote hai agar key print karte hai too lekin for of me keys ke value print hote hai 
// for in use karenge objects ke liye 
const myobj ={
    'py':"python",
    'js':"java script",
    'rb': "ruby",
    'rs' : "rust"
}
for (const key in myobj) {
//   console.log(`${key} shortcut for the ${myobj[key]}`);
}

// for in me indexes print hote hai agar key print karte hai too lekin for of me keys ke value print hote hai 

const myarr = ['rust',"python","java script","ruby","rust"]
for (const key in myarr) {
    //console.log(key); // to print the keys index
    //console.log(myarr[key]); // to print keys value

}

// map pe iteration nahi hota hai using these for method
const map = new Map()
map.set('in',"india")
map.set('usa',"united states of america")
map.set('fr',"france")

for (const keys in map) {
    console.log(map);
}