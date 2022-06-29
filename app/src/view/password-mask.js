function pass() {
    let password = document.getElementById('inp-password')
    if (password.value.length <6) {
        password.value = ""
        password.placeholder= "Error - password must be over 5 digits"
        console.log('Error - password must be bigger than 5 digits')   
        password.style.borderBlockColor = 'red';
    }else{
        password.style.borderBlockColor = 'blue';
        
    }
}