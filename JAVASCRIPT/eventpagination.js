// // // event pagination : process to effect element from child to root element when event is happen is called as even pagination
// //     1] capture pagination --->travel from root to target element
// //     2] bubble pagination ---> travel frmo target element ot root element 

// let gp = document.getElementById('gp')
// let parent = document.getElementById('parent')
// let child = document.getElementById('child')

// // 
// child.addEventListener('click', (e) => {
//     e.stopPropagation(); // it is event object method used to stop pagination 
//     console.log('child clicked')
//     child.style.backgroundColor = 'red';
// }, false)

// parent.addEventListener('click', (e) => {
//     e.stopPropagation();
//     console.log('parent clicked')
//     parent.style.backgroundColor = 'yellow';
// }, false)

// gp.addEventListener('click', (e) => {
//     e.stopPropagation();
//     console.log('gp clicked')
//     gp.style.backgroundColor = 'blue';
// }, false)


// // JSON : javaScript Object Notation 

// let emp = {
//     ename : 'Akshay',
//     eid : 45,
//     salary:78500
// }

// console.log(emp)

// // JSON.stringify() : convert js object into json object 
// let jobj = JSON.stringify(emp);
// console.log(jobj);

// // JSON.Parse() : used to convert object into json form
// let empobj = JSON.parse(jobj);
// console.log(empobj)



// time delays 

// 1] setTimeout()
// console.log('Hello')

// setTimeout(()=>{
//     console.log('good Afternoon')

// },3000);

// console.log('BY.............')

// // 2] setInterval()
// setInterval(()=>{
//     document.writeln('good Afternoon')
// },2000);


// clearTimeout 
//    let myTimeOut = setTimeout(()=>{
//         document.writeln('Happy Birthday.....!');
//    },5000);

//    let btn = document.querySelector('button');

//    btn.addEventListener('click',()=>{
//     console.log('timeout is clear.........!')
//       clearTimeout(myTimeOut);
//    })


// clearInterval 

let myInterval = setInterval(()=>{

    let d = new Date();
    document.getElementById('demo').innerHTML = d.toLocaleTimeString(); 

},1000);

   let btn = document.querySelector('button');
   btn.addEventListener('click',()=>{
      clearInterval(myInterval)
   })
