

let otp = Math.round(Math.random() * 10000);
let btn = document.querySelector('button')
let userOTP = document.querySelector('input')

console.log(otp)

btn.addEventListener('click', () => {
    console.log(typeof otp)
    console.log(typeof userOTP.value)
    console.log(userOTP.value == otp)

    if (userOTP.value == otp) {
        alert('Valid Otp')
    
    } else {
        alert('invalid OPT..............!')

    }
});