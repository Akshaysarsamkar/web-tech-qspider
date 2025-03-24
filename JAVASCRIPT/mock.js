
let info = function(address,phone){
    console.log(`Fullname is ${this.fname} ${this.lname} addres is ${address} and phone no is ${phone}` )
 }

let stud1 =  {
     fname : 'Akshay',
     lname : 'sarsamkar', 
}

let stud2 = {
    fname : 'suraj',
    lname : 'Jain'
}


// call method
info.call(stud1,'jalna','7841207410')

// apply
info.apply(stud2,['pune','9676521089'])

// bind 
let stu3 = info.bind(stud1,'mumbai','78451236')
stu3()


