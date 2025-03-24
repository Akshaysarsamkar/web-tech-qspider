let btn = document.forms[0]

btn.addEventListener('submit',(e)=>{
    e.preventDefault()
    let fname = document.getElementById('uname').value
    let pass = document.getElementById('pass').value
    // let address = document.getElementById('address').value
    // let phoneno = document.getElementById('phoneno').value

   
    
    localStorage.setItem('uname',fname)
    localStorage.setItem('password',pass)
    // localStorage.setItem('address',address)
    // localStorage.setItem('phoneno',phoneno)

    alert('Registration Successful.......!')
    open('../JAVASCRIPT/login.html')

})

