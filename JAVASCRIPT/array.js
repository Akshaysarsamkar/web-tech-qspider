// Array := which is used to store multiple valies 
// it store homogeneous as well as heterogeneous element 

// declaration 
//  1] array literal
let nums = [1, 2, 3, 4, 5, 5, 6, 7, 8];
const arr = ['akshay', true, 12, 4512.12]



console.log(nums);
console.log(arr);

// access the element using index 
console.log(nums[2]);
console.log(nums[7]);

//update
nums[0] = 100;
nums[5] = 500;
console.log(nums)

//add 
nums[8] = 1000;
nums[9] = 2000;
console.log(nums)

// delete 
delete nums[9];
delete nums[0];
console.log(nums)

// arr[0] = 7852;
// console.log(arr)

// 2] array constructor

let arr1 = new Array(21, 22, 23, 24, 25, 26, 27, 28, 29, 30);
console.log(arr1);

let arr2 = new Array(2);
arr2[0] = null
arr2[1] = 11
arr2[2] = 22
arr2[3] = 33
arr2[4] = 44
console.log(arr2)

// Arrays method 

let flipcard = ['TV','mobile','laptop','shoes','cloths'];
console.log(flipcard);

// 1. push(array_elements): used to add the elements at the end of an array
   flipcard.push('watch','table','chair')
   console.log(flipcard)

// 2.unshift() : used to add an element at starting of the array 
flipcard.unshift('bags','shirts','boxes')
console.log(flipcard)

// 3.pop: used to remove the last element of an array 
   flipcard.pop();
   flipcard.pop();
   console.log(flipcard)

// 4. shift : used to remove the first element of an array 
flipcard.shift();
flipcard.shift()
console.log(flipcard)


// splice(start index,delete count,replace element): used to delete and add array element 
flipcard.splice(2,1,'smart_watch','kajal')
console.log(flipcard)

flipcard.splice(4,3);
console.log(flipcard)

flipcard.splice(1,0,'laptop', 'shoes', 'cloths')
console.log(flipcard)

// 6.slice(start index,last index):- used to get the part of an array and return new array 
let slic= flipcard.slice(1,5);
console.log(slic)

console.log(flipcard.slice(3,5))

// 7.indexOf() : return the index position of a specified element 
console.log(flipcard.indexOf('shoes'))
console.log(flipcard.indexOf('akki'))  // if element is not in array returm -1

// 8. at() :- return the element present at specified index
   console.log(flipcard.at(2))
   console.log(flipcard.at(15)) // if index is invalid return undefined 

// 9.includes() :- will check element present in the array or not 
console.log(flipcard.includes('watch'))
console.log(flipcard.includes('table'))

// 10.concate:- used to merge two or more  array
let amozon = ['cable','pan','books'] 
console.log(flipcard.concat(amozon))
console.log(flipcard)
console.log(amozon)

// 11.join : join all the array element convert array into string 
console.log(typeof flipcard.join('_'))
console.log( flipcard.join('_'))

// 12.split() = convert string into the array
let s = 'Akshay kumar sarsamkar';
console.log(s.split(' '));
console.log(typeof s.split(' '));

// toString
console.log(flipcard.toString())
console.log(typeof flipcard.toString()) 



// filter(), map() and reduce() :
 
// 1. filter() : it is a HOF used to filter the element based on consition in the array it does not affect the original array 

let cost = [500,1200,3000,4850,652,850,9000]

let filterdata = cost.filter((value,index) => {
   
   if(value > 1000 && index > 2){
      return value;
   }

})

console.log(filterdata)


// 2. map(): HOF maps each array element

let mapaarr = cost.map((value,index) => {
      let dis = value/100*10;
      return value-dis;
})
console.log(mapaarr)

// 3.reduce(): HOF used to reduce entire array into a single value 
let reducearr = cost.reduce((accumulator,value) => {
    return accumulator+value;
},0)

console.log(reducearr)




let student = [123,'sahithi','sahithi@gmail.com','7889455612']   


let namechar = student[1];
namechar = namechar.split('').slice(0,4);
let contactchar = student[3];
contactchar = contactchar.split('').slice(0,4);
console.log(namechar) 
student[5] = namechar.join('')+contactchar.join('');
console.log(student)















