// const { response } = require("express");

// function validateEmail(email){
//     // const validate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     // console.log(validate.test(String('c.c@gmail.com').toLowerCase()))
//     // return validate.test(String(email).toLowerCase());
//     console.log(email)
//     return !email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    
// }
function emailMask(){
    let inputEmail = document.querySelector('#inp-email')
    //trocar por button ^
    // console.log(inputEmail.value)
    // inputEmail.addEventListener('keypress',() => {
        let email = inputEmail.value
        // console.log(inputEmail.value)
        // console.log(validateEmail(email))
            if(email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                // email= 'Correct Email'
                console.log('Not a error')
            }else{
                // email = 'Wrong Errado'
                console.log('error')
            }
    // })
}
