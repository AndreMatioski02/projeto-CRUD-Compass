function validateName(){
    let input_name = document.getElementById('inp-name')
    if (isNaN(input_name) || input_name == "") {
        input_name.placeholder = 'The input Name is Empty'
        input_name.style.borderBlockColor = "red"  
    }
}
function validateCpf(){
    let input_cpf = document.getElementById('inp-cpf')
    if (isNaN(input_cpf) || input_cpf =="") {
        input_cpf.placeholder = 'The input CPF is Empty'
        input_cpf.style.borderBlockColor = "red"
        // input_cpf.setAttribute(required,true)
    }
    else if(input_cpf !== "" ){
        input_cpf.style.borderBlockColor = "blue"
        // console.log('test')
    }
}
function validateBrth(){
    let input_brth = document.getElementById('inp-birthdate')
    if (isNaN(input_brth)) {
        input_brth.placeholder = 'The input birth date is Empty'
        input_brth.style.borderBlockColor = "red"
    }
}
function validateEmail(){
    let input_email = document.getElementById('inp-email')
    if (isNaN(input_email)) {
        input_email.placeholder = 'The input Email is Empty'
        input_email.style.borderBlockColor = "red"
    }
}

function validatePass(){
    let input_pass = document.getElementById('inp-password')
    if (isNaN(input_pass)) {
        input_pass.placeholder = 'The input Password is Empty'
        input_pass.style.borderBlockColor = "red"
    }
}
function validateAddr(){
    let input_address = document.getElementById('inp-address')
    if (isNaN(input_address)) {
        input_address.placeholder = 'The input Address is Empty'
        input_address.style.borderBlockColor = "red"
    }else if(input_address !== ""){
        input_address.style.borderBlockColor = "blue"
    }
}
function validateNum(){
    let input_num = document.getElementById('inp-number')
    if (isNaN(input_num)) {
        input_num.placeholder = 'The input Number is Empty'
        input_num.style.borderBlockColor = "red"
    }
}
function validateComp(){
    let input_comp = document.getElementById('inp-complement')
    if (isNaN(input_comp)) {
        input_comp.placeholder = 'The input Complement is Empty'
        input_comp.style.borderBlockColor = "red"
    }
}
function validateCity(){
    let input_city = document.getElementById('inp-city')
    if (isNaN(input_city)) {
        input_city.placeholder = 'The input City is Empty'
        input_city.style.borderBlockColor = "red"
    }
}
function validateState(){
    let input_state = document.getElementById('inp-state')
    if (isNaN(input_state)) {
        input_state.placeholder = 'The input State is Empty'
        input_state.style.borderBlockColor = "red"
    }
}
function validateCountry(){
    let input_country = document.getElementById('inp-country')

    if (isNaN(input_country)) {
        input_country.placeholder = 'The input Country is Empty'
        input_country.style.borderBlockColor = "red"
    }
}
function validateZip(){
    let input_zip = document.getElementById('inp-zipcode')
    if (isNaN(input_zip)) {
        input_zip.placeholder = 'The input Zip Code is Empty'
        input_zip.style.borderBlockColor = "red"
    }
}