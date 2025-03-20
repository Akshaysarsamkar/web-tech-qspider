// string : string is collection of charater 

let stmt = 'Akshay sarsamkar';
console.log(stmt.length)

// 1.slice(startindex,endindex):  used to get the part of a string in slice we can use nagative index
console.log(stmt.slice(2,9))
console.log(stmt.slice(9))
console.log(stmt.slice(2,-5))
console.log(stmt.slice(-25,-2))

// 2. substring(start_ind,end-ind) : used to get part of a string but nagative indexing not allow in this method
console.log('Substring method')
console.log(stmt.substring(2,9))
console.log(stmt.substring(9))
console.log(stmt.substring(2,-5))
console.log(stmt.substring(-25,-2))

// substr(startindex,endindex); used to get part of a string
console.log('substr method')
console.log(stmt.substr(2,9))
console.log(stmt.substr(9))
console.log(stmt.substr(5))

// replace 
console.log(stmt.replace('a','👍'))

//replaceAll
console.log(stmt.replace('a','👍'))

// indexOf: used to return index of passed occurence
console.log(stmt.indexOf('a'))
console.log(stmt.indexOf('sar'))

// lastIndexOf() : used to return last index of passed occurence
console.log(stmt.lastIndexOf('a'))
console.log(stmt.lastIndexOf('rsam'))

// includes(): check string is present ot not
console.log(stmt.includes('Akshay'))
console.log(stmt.includes('Good'))

// repeat(): number of copies to append
console.log(stmt.repeat(4))


// charAt() : return chracter of passed index
console.log(stmt.charAt(8))
console.log(stmt.charAt(12))

// charCodeAt(index) : number of copies to append
console.log(stmt.charCodeAt(9)) 
console.log(stmt.charCodeAt(1))

// concat() : merge String
console.log(stmt.concat(' from pune'))
console.log(stmt.concat(' is here'))

// padStart(): 
let num = '7896'
console.log(num.padStart(10,'X'))

// padEnd()
console.log(num.padEnd(10,'X'))

