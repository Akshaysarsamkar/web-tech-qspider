let emp = {
    ename: 'sam',
    salary: 45855,
    address: {
        state: 'maharatra',
        city: 'pune'
    }
}


function user(uname) {
    console.log(`Hello I Am ${uname}`)
} 

function multipleTable(){
    for(let i = 1;i<=10;i++){
        console.log(2*i)
    }
}

export {emp,user,multipleTable}