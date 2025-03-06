// function 

// function : - function is block of code used to perform perticular task 

console.log("Hello Frineds");

// parameter : variable declare at a time of function declaration is called as parameter
            // all the parameter are belongs to functions block scope 

    function demo(user){
        console.log(`user name ${user}`);
    }

// arguments: the value passed to parameter at time of function calling is called as arguments 
demo('Akshay');
demo('karan');

function  fact(num){

    let fact = 1;
    let n = 1;
    while(n<=num){
       fact*=n;
    }
    console.log(`factorial of number ${num} is ${fact}`);
}

fact(5)
fact(3)


// 7] HIGHER ORDER Function(HOF) := FUNCTION TAKES ONE MORE FUNCTION AS A VALUE TO ITS PARAMETER AND RETURN A FUNCTION 
// USED TO PERFORM MULTIPLE TASK 

function hof(a,b,task){
    return task(a,b);
}

let add = hof(7,4,function(a,b){ return a+b; })
console.log(add);
