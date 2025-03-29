let emp = {
    ename : 'Akshay',
    eid : 45,
    sal : 45000,
    address : {
        city : 'pune'
        ,state : 'Maha'
    },
    Skill : ['Java','CSS','JS','HTML']
} 

// in object Destructuring sequence does not mattern we can Destructuring any element any sequence

let {ename,eid,sal} = emp 
console.log(ename)
console.log(eid)
console.log(sal)

// Destructuring nested object 

// let {address : {city,state}} = emp 
// console.log(city)
// console.log(state) 

let {city,state} = emp.address
console.log(city)
console.log(state) 


// Destructuring array inside the objects 
// let {Skill : [s1,s2,s3,s4]} = emp 
// // console.log(Skill)  => not allow
// console.log(s1)
// console.log(s2)
// console.log(s3)
// console.log(s4)

let [s1,s2,s3,s4] = emp.Skill 
console.log(s1)
console.log(s2)
console.log(s3)
console.log(s4)



let {ename : employee , sal : salary, eid : employeeId} = {
    ename : 'Karan',
    eid : 78,
    sal : 41000,
    address : {
        city : 'Mumbai'
        ,state : 'Maha'
    },
    Skill : ['C','C++','Python','PHP']
} 

console.log(employee)
console.log(salary)
console.log(employeeId)

