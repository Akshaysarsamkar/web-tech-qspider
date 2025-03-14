// // iterators 

// // 1. forrach(callback) : hof -- callback ---executes a function for each element of an array
//    let arr = [45,12,78,98,56,23]
//    arr.forEach((value,index) => {
//          console.log(`res of ${value} * 5 is ${value *5}`)
//    })


// // 2. for of : iterate over the array 
      
// let nums  = [1,2,3,4,5,6]
// for(let i in nums){
//     console.log(i);
// } 


// // 3. for in : used to iteraor over an object 
//  let emp = {
//     ename : 'Akshay',
//     role : 'ASC',
//     salary : 45000
//  } 


//  for(i in emp){
//      console.log(emp[i])
//  }


// date object 

let cd = new Date();
console.log(cd);
console.log(cd.getFullYear())
console.log(cd.getMonth())
console.log(cd.getDay())
console.log(cd.getDate())
console.log(cd.getMinutes())
console.log(cd.getTime())
console.log(cd.getSeconds())


//set date
let dob = cd.setFullYear('2004')
console.log(dob)
