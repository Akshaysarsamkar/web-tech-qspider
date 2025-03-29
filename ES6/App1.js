// this is external file ---> export the code

// there are two ways to export the code 
// 1] named export : export multiset of code is called as named export 


// inline export 
export let stu1 = 'Akshay';
export let stu2 = 'Sunil'


// together export 
let developer = ['AKshay', 'Pradip', 'karan', 'ram']

let greeting = (developer) => {
    for (let d of developer) {
        console.log(`Hello users ${d}`)
    }

}

export {developer,greeting}

// 2] default export: export only one set of data
       let num = [1,2,3,4,5,6,7,8]
       export default num 
      