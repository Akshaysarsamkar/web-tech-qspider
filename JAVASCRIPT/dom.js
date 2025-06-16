// // dom target element 
// // direct access 
console.log(document.body)
console.log(document.baseURI)
console.log(document.scripts)
console.log(document.images)
console.log(document.links)
console.log(document.forms)
console.log(document)


// // getElementById('id') : target the element eith specified unique id 
// // target only unique id 
console.log(document.getElementById('heading'))
let text = document.getElementById('heading');


// // getElementByClassName('classname') : target multiple elements with the specified classname
// return HTML collection : array like object 
let btns = document.getElementsByClassName('btn') 
console.log(btns)  


// getElementByTagName('tagname') :- used to target multiple element with specified tagname 
// return html collection 
let tagname =  document.getElementsByTagName('section')
console.log(tagname)

// Array.form : used to create HTML document in array from

let t = Array.forms('tagname')

for(let i of t){
    console.log(i)
}


// querySelector('cssselector'): targets he single element with specified css selector 
let qs = document.querySelector('.demo')
console.log(qs);


// querySelectorAll('cssselector') : used to target multiple element eith seicified css selector 
// return nodelist : array like object 

let b = document.querySelectorAll('#allbtn')
console.log(b)

for(let i of b ){
    console.log(i)
}

