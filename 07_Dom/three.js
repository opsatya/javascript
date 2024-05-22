const span = document.createElement('span')
console.log(span);
span.className ="main"
span.id = Math.floor(Math.random() *10 +100)
// span.getAttribute("title","title attribute");
span.style.backgroundColor = "green"
span.style.padding = "15px"
//span.innerText = "heyy its satya here"
const creatednode = document.createTextNode("satya yt");
span.append('creatednode')

document.body.append(span)