

// function createCard() {

//     let newelement = document.createElement('div');

//     newelement.setAttribute('id', 'card');

//     let img = document.createElement('img');
//     img.src = 'https://th.bing.com/th?id=OIP.4j4jNaPU3bIzDJHBj6HDSwHaHa&w=250&h=250&c=8&rs=1&qlt=90&r=0&o=6&cb=15&dpr=1.3&pid=3.1&rm=2';

//     let ename = document.createElement('h2');
//     ename.innerText = 'Akshay Kumar';

//     let Empid = document.createElement('h2');
//     Empid.innerText = 'PY9890';

//     let removeButton = document.createElement('button');
//     // removeButton.setAttribute('onclick','removeCard()');

//     removeButton.onclick = 'removeCard()'

//     removeButton.setAttribute('id','removebtn');

//     removeButton.innerHTML = 'removecard'


//     newelement.append(img,ename, Empid,removeButton);

//     document.body.appendChild(newelement)

//     document.querySelector('button').remove();

// }


// let btn = document.querySelector('button')
// btn.addEventListener('click',createCard)

// // btn.addEventListener('click',()=>{
// //     alert('btn has been clicked')
// // })


// let btn = document.querySelector('button');
// let text = document.querySelector('input');

// btn.addEventListener('click',() => {
//       document.body.style.backgroundColor = text.value
//       text.value = '';
// })


// let btn = document.querySelector('button')

// btn.addEventListener('mouseover', ()=>{
//       document.body.style.backgroundColor = 'Black';
//       document.body.style.color = 'white';
//       btn.innerText = 'white';
// })


// btn.addEventListener('mouseout',()=>{
//       document.body.style.backgroundColor = 'white';
//       document.body.style.color = 'black';
//       btn.innerText = 'dark';
// })


// let heart = document.getElementById('heart')

// heart.addEventListener('mousedown', () => {
//       heart.innerText = '😍😍';
// })

// heart.addEventListener('mouseup', () => {
//       heart.innerText = '❤';
// })


// contextmenu
// let h2 = document.querySelector('h2')
// h2.addEventListener('contextmenu',()=>{
//       h2.innerHTML += ' Hyper text markup language';
// })


// // dblclick
// let btn = document.querySelector('button')

// btn.addEventListener('dblclick',()=>{
//       document.writeln('btn clicked...........')
// })


addEventListener('keydown', (e) => {
      console.log(e)
      e.preventDefault();
      console.log('key is in down state')
})

addEventListener('keypress', (e) => {
      console.log(e)
      e.preventDefault();
      console.log('key is in press state')
})

addEventListener('keyup', (e) => {
      console.log(e);
      console.log('key is in up state')
})


let forms = document.forms[0];
console.log(forms)

forms.addEventListener('submit', (e) => {

      console.log(e)
      e.preventDefault();
      alert('from has been submited')
})




