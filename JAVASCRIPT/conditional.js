// conditional statement  : if,if-else,switch,else-if


// prompt : used to take input from user in javascript , it always return string datatype
// let bill = Number(prompt('Enter the bill amount'));
// console.log(bill)
// console.log(typeof bill)

// if (bill >= 500 && bill <= 1000) {
//     let dis = bill / 100 * 2;
//     console.log(`Dear customer your payable amount is RS.${bill - dis} with the discount of RS.${dis}`);
// }
// else if (bill >= 1001 && bill <= 5000) {
//     let dis = bill / 100 * 5;
//     console.log(`Dear customer your payable amount is RS.${bill - dis} with the discount of RS.${dis}`);
// }
// else if (bill >= 5001) {
//     let dis = bill / 100 * 10;
//     console.log(`Dear customer your payable amount is RS.${bill - dis} with the discount of RS.${dis}`);
// } else {
//     console.log(`Dear customer discount not applied`);
// }




// // switch statement 

// let day = Number(prompt("Enter the day in number"));

// switch (day) {

//     case 1: alert('Its Monday')
//         break;

//     case 2:alert('its Tuesday')
//         break;

//     case 3:alert('its Wednesday')
//         break;

//     case 4:alert('its Thursday')
//         break;

//     case 5:alert('its Friday')
//         break;

//     case 6:alert('its Staturday')
//         break;

//     case 7:alert('its sunday')
//         break;

//     default:alert('invalid choice')
//         break;

// } 


// looping statement : while , do-white,for,foreach

// while : it is type of loop used to perform same operation again and again 
let i = 1;
while(i<10){
    document.write('Good afternoon studentss');
}
