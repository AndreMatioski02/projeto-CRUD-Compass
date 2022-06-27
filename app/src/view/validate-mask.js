function validateInputs(){
    let input_name = document.querySelector('#inp-name')
    let input_cpf = document.querySelector('#inp-cpf')
    let input_brth = document.querySelector('#inp-birthdate')
    let input_email = document.querySelector('#inp-email')
    let input_pass = document.querySelector('#inp-password')
    let input_address = document.querySelector('#inp-address')
    let input_num = document.querySelector('#inp-number')
    let input_comp = document.querySelector('#inp-complement')
    let input_city = document.querySelector('#inp-city')
    let input_state = document.querySelector('#inp-state')
    let input_country = document.querySelector('#inp-country')
    let input_zip = document.querySelector('#inp-zipcode')

    
    if (isNaN(input_name)) {
        alert('The input Name is Empty')
    }
    if (isNaN(input_cpf)) {
        alert('The input CPF is Empty')
    }
    if (isNaN(input_brth)) {
        alert('The input birth date is Empty')
    }
    if (isNaN(input_email)) {
        alert('The input Email is Empty')
    }
    if (isNaN(input_pass)) {
        alert('The input Password is Empty')
    }
    if (isNaN(input_address)) {
        alert('The input Address is Empty')
    }
    if (isNaN(input_num)) {
        alert('The input Number is Empty')
    }
    if (isNaN(input_comp)) {
        alert('The input Complement is Empty')
    }
    if (isNaN(input_city)) {
        alert('The input City is Empty')
    }
    if (isNaN(input_state)) {
        alert('The input State is Empty')
    }
    if (isNaN(input_country)) {
        alert('The input Country is Empty')
    }
    if (isNaN(input_zip)) {
        alert('The input Zip Code is Empty')
    }
    
}