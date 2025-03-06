// // types of fubction

// // 1] named function : function with name is called as named function 
// console.log('hello');
// function add(a, b) {
//     console.log(a + b);
// }

// add(4, 5);


// // 2.anoymous function : function without name
// // 3.function with expression: the function passed as value to a variable so the function with variable is Function expression
// let demo = function(){
//     console.log(`hello student.............`);
// }
// console.log(demo) 
// // 4.first-class function/first citizen function : function passed a value to a variable is called as GCF
// let greet = function(std){
//     console.log(`hello ${std}`);
// }

// greet('Rahul');

// // 4. immidiate invoking function(IIF) : function which should be called immediatly after the declaration
// // this is one more way to execute anonymous function 
// // one time usage

// (function(x,y){
//     console.log(`the result is ${x+y}`);
// })(5,6);


// 5.nested function : function inside function is called as nested function 
function parent(){
    let pland = 40;
    let phouse =9;
    console.log(`Parent Properties: ${pland} acers land and ${phouse} houses`);

    function child(){
        let cland = 10;
        let chouse =3;
        console.log(`Parent Properties: ${cland + pland} acers land and ${chouse} houses`);
     
        // lexical scoping : ability of js to access the varibable from outer scope whenever variable is not present in current
        // closure: hold the required data of outer functon
    }
    return child;
    // child();
}

parent()();  //javascript currying : executing nested function along with outer function using one more paranthesis is called as javascript currying


// Array function : same like as normal function but array function reduce the syntax 

// implicit return : return value automatically
let add = (a,b) => console.log(a+b)
add(45,89)
let product = () => {
    let a = 5;
    let b = 4;
    let c = 10;

    return a*b*c;
}

console.log(product());
 
let factorial = () => {
    let fact = 1;

}

// Higher order function(HOF): function takes one more function as a value to its parameter and return function 
// used to perform multiple task 

// 8] callback function : function which is passed as an argument to one more function as called as 
// function hof(a,b,task){
//     return task(a,b);
// }

// let add = hof(7,4,function(a,b){ return a+b; })
// console.log(add);

let hof = (a,b,task) => {
    return task(a,b);
}

let addition = hof(2,4,(p,r) => { return p+r})
console.log(`addition of two number is =: ${addition}`)


let mul = hof(7,7,(a,b) => { return a*b })
console.log(`multipication of two number is:= ${mul}`)

let sub = hof(78,45,(a,b) => {return a,b})
console.log(`substractin of two number is := ${sub}`)

let div = hof(74,52,(p,q) => { return p-q })
console.log(`divivsion of two number is := ${div}`)


// 9. generator function : generator the value 
// yield : keyword is js similer to return but u can take yeild multiple time and also stop execution of function in anyy time where yeild keyword is used

function* demo() {
    yield 152;
    yield 'akki';
    yield 'sam'
    yield true 
    yield 142.325
}

let res = demo()

// console.log(res.next().value);
// console.log(res.next().value);
// console.log(res.next().value);
// console.log(res.next().value);


for(let i=1;i<4;i++){
    document.writeln(res.next().value)
}

let useername = prompt('Enter Your name');
let greet = (useername) =>{
        document.write(`Hello ${useername} good evening`)
}

greet(useername)