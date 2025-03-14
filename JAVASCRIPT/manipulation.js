//changing the content of html element 
// innerHTML : CHANGE the innerhtml of an element. we can use tag in innerhtml 

let h = document.getElementById('heading')

// h.innerHTML = '<i>Hello akshay is here</i>'

// innerText : used to cheng the content we can not used html tags here 

h.innerText = '<b>this is innertext</b>'

// changing the attribute value 
h.id = 'greeting'; 

// adding new attribute to the element 
// setAttribute('attribute name')
h.setAttribute('id','head');

// add style 
h.style.color = 'red'
document.body.style.backgroundColor = 'green'

// creating an element 

// 1.createElement('tag') : used to create element 
let div = document.createElement('div');

// appendChild(): used to add new element to the document 
document.body.appendChild(div);

// deleting an element 
// removeChild('element')
// document.body.removeChild(h);

// remove : used to remove direct an element 
div.remove() 

// replaceChild(new,old);
let fig = document.createElement('figure')

let img = document.createElement('img')

img.src = "https://images8.alphacoders.com/369/369874.jpg"


fig.appendChild(img);
document.body.appendChild(fig);

let text = document.createElement('h1')

text.innerHTML = '<h1>Hello this is peocock img</h>';

fig.replaceChild(text,img)