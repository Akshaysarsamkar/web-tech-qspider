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

