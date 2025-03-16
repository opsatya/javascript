
let today = new Date();

/*console.log(today); // This will log the current date and time, e.g., "2024-05-14T08:30:00.000Z"
console.log(today.getMonth()); // This will log 4 because May is the 5th month, and getMonth() returns 0-indexed month (0 = January, 1 = February, ..., 4 = May)
console.log(today.getTime());  // getTime() method current date aur time ka timestamp return karta hai jo milliseconds mein hota hai January 1, 1970 se.*/

// console.log(today.toJSON());
// console.log(today.toString());
// console.log(today.toDateString());
// console.log(today.toISOString());
// console.log(today.toLocaleString());
// console.log(today.toLocaleTimeString());
// console.log(typeof (today));  // object

 let mybirthday = new Date(2005,3,12)
// console.log(mybirthday.toDateString());

let datetime = new Date(2005,3,12,5,3)
//console.log(datetime.toLocaleDateString());


let createdate = new Date("2005-04-12")
//console.log(createdate.toLocaleDateString());

let anotherdate = new Date("2024-05-14")
//  console.log(anotherdate.toLocaleString());

let mytimestamp = Date.now()
// console.log(mytimestamp);
// console.log(anotherdate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newdate = new Date()
// console.log(newdate.getMonth() +1);
// console.log(newdate.getDay());

newdate.toLocaleString('default',{
    weekday : "long"
})
