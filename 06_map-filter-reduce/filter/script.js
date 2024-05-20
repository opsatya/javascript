// for each loop koi variable me store nahi kar sakte ,wo undefiend send karta hai par hamesha ye jaruri nahi hai ki for each kuch return hi kare, for each loop kuch return nahi karta hai 

// const coding =["js","python","cpp","ruby","java"]

// const values = coding.forEach( (items)=>{
//     console.log(items);
// })
// console.log(values);


const mynum = [1,2,3,4,5,6,7,8,9,10]

// let newnum = mynum.filter( (num)=>{
//  return num>4
// })

// const newnum = []
// mynum.forEach( (num)=>{
//   if(num >4){
//    newnum.push(num)
//   }
// })
// console.log(newnum);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  // agar scope open kiya hai to return keyword use karna padega.
  let  userbook = books.filter( (bk)=>{
   // return bk.title === "Book One"
   //return bk.genre === "History"
   //return bk.publish>=2000
  })
  console.log(userbook);