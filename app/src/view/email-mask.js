const { response } = require("express");

function validateEmail(){
    const validate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return validate.test(String(email).toLowerCase());
    console.log('foi')
}
function emailMask(){
    const inputEmail = document.querySelector('#inp-email')
    //trocar por button ^
    
    inputEmail.addEventListener('keypress',() => {
        const email = document.querySelector('#inp-email').value
            if(validateEmail(email)) {
                response.innerHTML = 'Email Correto'
                console.log('ta ok')
            }else{
                email = 'Email Errado'
            }
    })
}
