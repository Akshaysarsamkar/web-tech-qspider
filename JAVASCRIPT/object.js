// object 

// there way to create an object 
// 1. object literal
//    syntax : var/let/const obj_name = {
//     key : value 
//     key :value 
//    }


let user = {
    uname: 'Akshay',
    uid: 45,
    salary: 7852
}

console.log(user)

// dot(.) notation and bracket([]) notation 
// access ---> obj-name.keyname  and obj-name['keyname']

console.log(user.uid);
console.log(user.salary)
console.log(user['uname'])


// update -- obj-name.keyname = new value  and obj-name['keyname']=new-value
user.uid = 23
user['salary'] = 21000
console.log(user)

// add obj-name.keyname =value  and obj-name['keyname']=value

user.age = 23
user['adds'] = 'pune';
console.log(user)


// delete delete obj-name.keyname  and obj-name['keyname']
delete user.salary
delete user['adds']
console.log(user)


// 2. object constructor 

let car = new Object();
car.name = 'thar'
car.color = 'Black'
car.model = 2025
car.engine = 'petrol'

console.log(car)

// 3.constructor function 
function student(sname, sid, addr, phone) {
    this.sname = sname
    this.sid = sid
    this.addr = addr
    this.phone = phone
}


let stu1 = new student('akshay', 1, 'pune', 78451230);
console.log(stu1)

let stu2 = new student('Karan', 2, 'Mumbai', 8596741542);
console.log(stu2)


let person = {
    pname: 'Soham',
    pid: 1123,
    isDev: true,
    sal: 45872.12,
    language: ['Hindi', 'English', 'Tamil', 'Telgu'],
    address: {
        city: 'MUMBAI',
        state: 'Maharatra'
    },

    greet: function () {    // object method 

        console.log(`Hello I Am ${this.pname}`)  // inside the array function we can not use the this keyword

    }

}

console.log(person.pname)
console.log(person.sal)
console.log(person.isDev)
console.log(person.language)
console.log(person.address.city)
person.greet();


// object methods 
let cust = {
    cid : 78,
    cname : 'gaurav',
    salary : 4500
    
}
//1. Object.keys(obj_name) : to get all the key in array form 
console.log(Object.keys(cust))

//2. Object.values : use to get all the values in array form 
console.log(Object.values(user))

//3. entiries : return nested array
console.log(Object.entries(cust))

//4. hasOwn(object_name,'keyname') : ro check properties is present in object ot not 
console.log(Object.hasOwn(cust,'cid'))
console.log(Object.hasOwn(cust,'addr'))

//5. assign(obj1,obj2,.......) : merge the multiple objects
let address = {
  city:'pune',
  state : 'Maharatra',
  county : 'India'
}

//6. Object.assign(address,cust); // it will affect address object 


let allinfo = Object.assign({},cust,address)
console.log(allinfo)
console.log(address)
console.log(cust)

// 7. object.seal(object_name) : to seal the object we can not add and deleter the propeties in object but be update it

Object.seal(address);

// object.isSealed(obj_name) : used to check object is seal or not 
console.log(Object.isSealed(address))

//add : not all
address.pincode = 301107;
console.log(`after the add method`)
console.log((address))

// delete : not allow 
delete address.county
console.log(`after the remove method`)
console.log((address))

// update  : allow 
console.log(`after the update method`)
address.city = 'Beed'
console.log((address))



// 7. object.freeze(object_name) : to freeze the object we can not add ,delete and update an object properties 

Object.freeze(address);

// object.isFrozen(obj_name) : used to check object is freeze or not 
console.log(Object.isFrozen(address))

//add : not all
address.dis = 'Jalna';
console.log(`after the add method in freeze`)
console.log((address))

// delete : not allow 
delete address.county
console.log(`after the remove method freeze`)
console.log((address))

// update  : allow 
console.log(`after the update method freeze`)
address.city = 'Pune'
console.log((address))







